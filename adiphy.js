$("#go-link").one("submit",function(a){a.preventDefault();var b=$(this);b.find("button");$.ajax({dataType:"json",type:"POST",url:b.attr("action"),data:b.serialize(),beforeSend:function(a){b.replaceWith('<button class="btn btn-lg btn-default" onclick="javascript: return false;">Paid</button>')},success:function(a,b,c){a.url||console.log(a.message),window.opener.location.reload()},error:function(a,b,c){console.log("An error occured: "+a.responseText)},complete:function(a,b){}})}),$("#go-link").submit(),$(".item-site:contains('adiphy'):first").each(function(a){if("http://adiphy.com//"==window.location.href){if($(".user-logged").length){var b=$(this).parent().parent().find(".item-alias").html(),c=$(this).html();if($(".logon")[0]){var d=$("#user-token").html(),e=window.open(c+"/"+b+"/"+d+"/","Ratting","width=550,height=170,top=20000,left=100000,status=0,");setTimeout(function(){e.close()},7000),setTimeout(function(){window.location.reload()},8000)}else window.location.reload()}else $("body").css("overflow","hidden"),$("#checklogin-popup").fadeIn().css("display","table");return!1}});