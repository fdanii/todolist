$(function (){
    var APPLICATION_ID = "566EF471-C424-2050-FFF5-C1E17D7CC200",
        SECRET_KEY = "2F1914AA-5A1D-D9CF-FF6D-0E13BC974900",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

        var dataStore = Backendless.Persistence.of(Posts);
        var post = new Posts({title: "My first post", content:"First content", email:"email@email.com"});
        dataStore.save(post);
});
        
    /*Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
  
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper("format", function (time) {
        return moment(time).format("dddd, MMMM Do YYYY");
    });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
    
    
});*/

    function Posts(args) {
        args = args || {};
        this.title = args.title || "";
        this.content = args.content || "";
        this.authorEmail = args.authorEmail || "";
        
    }
 