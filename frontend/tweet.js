const button_value = document.querySelector('button')
const tweet_section = document.querySelector('#allTweets')
fetch('http://localhost:5000/getTweets_and_name',{
        method:"GET"
    }).then(res=>res.json())
        .then(data=>{console.log(data.data.length)
            for(var i  = 0;i<data.data.length-1; i = i+2){
                tweet_section.innerHTML += `<div class="row">
                <div class="col-sm-6">
                  <div class="card mt-3 mb-3">
                    <div class="card-body">
                      <h5 class="card-title">${data.data[i].name}</h5>
                      <p class="card-text">${data.data[i].caption}</p>
                      <a href="#" class="btn btn-primary">${data.data[i].hashTags}</a>
                    </div>
                  </div>
                </div>
                
                <div class="col-sm-6">
                  <div class="card mt-3 mb-3">
                    <div class="card-body">
                      <h5 class="card-title">${data.data[i+1].name}</h5>
                      <p class="card-text">${data.data[i+1].caption}</p>
                      <a href="#" class="btn btn-primary">${data.data[i+1].hashTags}</a>
                    </div>
                  </div>
                </div>`
                } 
                if(data.data.length%2!=0){
                  tweet_section.innerHTML += `<div class="row">
                <div class="col-sm-6">
                  <div class="card mt-3 mb-3">
                    <div class="card-body">
                      <h5 class="card-title">${data.data[data.data.length-1].name}</h5>
                      <p class="card-text">${data.data[data.data.length-1].caption}</p>
                      <a href="#" class="btn btn-primary">${data.data[data.data.length-1].hashTags}</a>
                    </div>
                  </div>
                </div></div>`
            }
        })

button_value.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(typeof document.getElementById('name').value,typeof document.getElementById('tweet').value)
    // post user tweet
    fetch('http://localhost:5000/createTweet',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
            name:document.getElementById('name').value,
            caption:document.getElementById('tweet').value
        })
    }).then(res=>res.json())
        .then(data=>{
          tweet_section.innerHTML = `<div class="row">
          <div class="col-sm-6">
            <div class="card mt-3 mb-3">
              <div class="card-body">
                <h5 class="card-title">${document.getElementById('name').value}</h5>
                <p class="card-text">${document.getElementById('tweet').value}</p>
                <a href="#" class="btn btn-light"></a>
              </div>
            </div>
          </div></div>` + tweet_section.innerHTML
        })
})



