$(function (){
    var APPLICATION_ID = "566EF471-C424-2050-FFF5-C1E17D7CC200",
        SECRET_KEY = "2F1914AA-5A1D-D9CF-FF6D-0E13BC974900",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

        
        
        var loginScript = $("#login-template").html();
        var loginTemplate = Handlebars.compile(loginScript);
        
        $('.main-container').html(loginTemplate);
});
        
  

    function Posts(args) {
        args = args || {};
        this.title = args.title || "";
        this.content = args.content || "";
        this.authorEmail = args.authorEmail || "";
    }