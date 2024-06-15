export default args => {
    const result = args.configDefaultConfig;
    // regex to filter out items with input match .editorConfig. or .editorPreview.
    const filtered = result.filter(
        item => item.input.match(/\.editorConfig\./) || item.input.match(/\.editorPreview\./)
    );

    // remove command plugin from all items to let vitejs handle it
    filtered.forEach(item => {
        item.plugins = item.plugins.filter(
            plugin => plugin === null || !["command", "widget-typing"].includes(plugin.name)
        );
    });
    return filtered;
};
