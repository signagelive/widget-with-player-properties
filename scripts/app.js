require.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app',
        jquery: 'vendor/jquery'
    }
});

require(['jquery', 'wdf/widget-config'], function($, WidgetConfig) {

    // load the widget configuration
    var config = new WidgetConfig();
    config.on('config-initialized', function(event, data) {
        var tbody = $('#tblPreferences tbody');

        // iterate and display the preferences
        // you can directly read the value of any preference by calling config.preferenceName or config['preference name if it has a space!']
        for (var preferenceKey in config.preferences) {
            tbody.append("<tr><td>" + preferenceKey + "</td><td>" + config.preferences[preferenceKey] + "</td></tr>");
        }
    });
    config.on('config-error', function() {
        $('#output').text('Error loading preferences');
    });
    config.init();
});