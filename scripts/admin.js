$(document).ready(function() {
  $.getJSON('https://reqres.in/api/users?page=1', function(data) {
    console.log(data.data[0].email);
    userData = data.data;
    $.each(userData, function () {
      $('.user-row-container').append(
        '<div class="user-row"><img class="user-image" src="' + this.avatar + '"><div class="user-name"><p>' + this.first_name + ' ' + this.last_name + '</p></div><div class="user-email"><p>' + this.email + '</p></div><div class="job-role"><p>Developer</p></div><button class="isActive">Activated</button><i class="fas fa-cog" id="icon"></i><i class="fas fa-sort-down" id="sort-down"></i></div>'
      )
  });
 });
})
