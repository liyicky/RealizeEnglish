$(function(){$("#contactForm input,#contactForm textarea").jqBootstrapValidation({preventSubmit:true,submitError:function($form,event,errors){},submitSuccess:function($form,event){event.preventDefault();var name=$("input#name").val();var email=$("input#email").val();var phone=$("input#phone").val();var message=$("textarea#message").val();var firstName=name;if(firstName.indexOf(' ')>=0){firstName=name.split(' ').slice(0,-1).join(' ');}$.ajax({url:"././mail/contact_me.php",type:"POST",data:{name:name,phone:phone,email:email,message:message},cache:false,success:function(){$('#success').html("<div class='alert alert-success'>");$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");$('#success > .alert-success').append("<strong>この度は英会話ハウスリアライズにお問い合わせ頂きありがとうございます。<br>3営業日以内にご連絡致しますので、しばらくお待ち下さい。</strong>");$('#success > .alert-success').append('</div>');$('#contactForm').trigger("reset");},error:function(){$('#success').html("<div class='alert alert-danger'>");$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");$('#success > .alert-danger').append("<strong>申し訳ございません、エラーが発生しました。<br>メールでご連絡をお願い致します:  realizenglish@gmail.com</strong>");$('#success > .alert-danger').append('</div>');$('#contactForm').trigger("reset");},})},filter:function(){return $(this).is(":visible");},});$("a[data-toggle=\"tab\"]").click(function(e){e.preventDefault();$(this).tab("show");});});$('#name').focus(function(){$('#success').html('');});