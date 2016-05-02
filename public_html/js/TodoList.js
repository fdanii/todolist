$(function (){
    var APPLICATION_ID = "566EF471-C424-2050-FFF5-C1E17D7CC200",
        SECRET_KEY = "2F1914AA-5A1D-D9CF-FF6D-0E13BC974900",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

        
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
        
});
        
  

    function Posts(args) {
        args = args || {};
        this.title = args.title || "";
        this.content = args.content || "";
       // this.authorEmail = args.authorEmail || "";
    }
    
    $(document).on('click','.trash', function(event) {
        console.log(event);
        Backendless.Persistence.of(Posts).remove(event.target.attributes.data.nodeValue);
       location.reload(); 
    });
    
    /* $(document).on('click','.complete', function(event) {
        console.log(event);
        Backendless.Persistence.of(Posts).update(event.target.attributes.data.nodeValue);
       location.reload(); 
       
    });*/

 $(document).on('click', '.add-blog', function(){
        var addBlogScript = $("#add-blog-template").html();
        var addBlogTemplate = Handlebars.compile(addBlogScript);
    
        $('.main-container').html(addBlogTemplate);
       
    });
    $(document).on('submit','.form-add-blog', function (event){
        event.preventDefault();
        
        var data = $(this).serializeArray(),
        title = data[0].value,
        content = data[1].value;
        
        if (content === "" || title ==="") {
            Materialize.toast('Cannot leave title or content empty!', 4000, 'rounded');
        }
        else {
        
        var dataStore = Backendless.Persistence.of(Posts);
        
        var postObject = new Posts({
            title: title,
            content: content,
          //  authorEmail: Backendless.UserService.getCurrentUser().email
        });
        
            dataStore.save(postObject);
      
            this.title.value = "";
            this.content.value = "";
        }
    });
  
    


    function Posts(args) {
        args = args || {};
        this.title = args.title || "";
        this.content = args.content || "";
        this.authorEmail = args.authorEmail || "";
        
    }