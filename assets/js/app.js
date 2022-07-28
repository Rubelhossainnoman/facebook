/**
 * Get Elements here....
*/

const fb_form = document.getElementById('create_post_form');
const msg = document.querySelector('.msg');
const font_end_data = document.getElementById('all_post');

fb_form.onsubmit = (e) =>{
    e.preventDefault();

    const data = new FormData(e.target);
    const dataValue = Object.fromEntries(data.entries());
    const {text_area,post_img,names,index} = Object.fromEntries(data.entries());
    
    if (!text_area || !names) {
        msg.innerHTML = setaleart('All feilds are required','danger');
    } else {
        setLSdata('fb_info', dataValue);
        e.target.reset();
        get_all_post()
    }
};

/**
 * Get All post here....
*/

const get_all_post = () =>{
    let post = readLSdata('fb_info');
    list = '';

    if (!post || post.length == 0) {
        list = `
        <div class="post_timeline_area post_area_fb">
            <div class="card shadow-sm">
                <div class="card-body pb-0">
                    <p class="text-center" style="color:#B0B3B8;">😢😢😢No Post Found😢😢😢</p>
                </div>
            </div>
        </div>`;
    };
    if (post || post.length > 0) {
        post.map( (data,index) => {
            list +=`
            <div class="post_timeline_area">
            <div class="card shadow-sm">
              <div class="card-body pb-0">
                <div class="post_auth_area">
                  <div class="user_info">
                    <img class="rounded-circle" src="./assets/img/Rubel_hossain_noman.jpg" alt="">
                    <div class="user_details">
                      <span><a href="#">${data.names}</a></span>
                      <span>Just now . <ion-icon name="earth-outline"></ion-icon></span>
                    </div>
                  </div>
                  <div class="more_details">
                    <div class="dropdown edit_delete_post">
                      <a class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Edit</a>
                        <a class="dropdown-item delete_post" index="${index}" href="#">Delete Post</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post_content_area">
                  <p style="color:#E4E6EB;" class="pt-1 pb-2 mb-0">${data.text_area}</p>
                </div>
              </div>
              <div class="post_content_image_video_another">
                <img class="w-100" src="${data.post_img}" alt="">
              </div>
              <div class="card-footer">
                <div class="like_comment_area">
                  <div class="like_comment_react">
                    <img class="rounded-circle" src="./assets/img/love.svg" alt="">
                    <div class="react_details">
                      <span>Rubel Hossain (Noman) and 2.8k like</span>
                    </div>
                  </div>
                  <div class="share_count">
                    <span>1k share</span>
                  </div>
                </div>
                <hr style="color: #dddddda3;margin-bottom: 5px;">
                <div class="card_icon_box d-flex justify-content-around">
                  <div class="for_icon like_comments1">
                    <span></span>
                    <span>Like</span>
                  </div>
                  <div class="for_icon like_comments2">
                    <span></span>
                    <span>Comment</span>
                  </div>
                  <div class="for_icon like_comments3">
                    <span></span>
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;
        });
    }
    font_end_data.innerHTML = list;
}
get_all_post();

// For delete post...

font_end_data.onclick = (e) =>{
    e.preventDefault();

    if(e.target.classList.contains('delete_post')){

        let conf_irmation = confirm('Are you sure to delete this data for your end...???');

        if (conf_irmation) {
            // Get index....here...
            let index = e.target.getAttribute('index');

            // Get ls data...here...
            let delet_data = readLSdata('fb_info');

            // Delete Index data...
            delet_data.splice(index, 1);

            // Updatae index data...here...
            
            updateLSdata('fb_info', delet_data);
            get_all_post();
        };
    }
};

