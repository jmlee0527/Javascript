let searchedMovieTitles = []; 

function loadMovieInfo(){
    let movieTitle = document.getElementById("movieTitle").value;
    if(movieTitle === ""){
        alert("영화 제목을 입력해주세요")
        return;
    }

    let xhr = new XMLHttpRequest();     //get,post 요청을 보낼수 있게해줌
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if (xhr.status === 200){
                //데이터가 잘 받아와진 경우 처리
                let data = JSON.parse(xhr.responseText)
                if(data.Response === 'False'){
                    alert("영화 정보를 찾을 수 없습니다.")
                }else{
                    let movieInfo = '';
                    movieInfo += '<h2>' + data.Title + '</h2>';
                    movieInfo += '<p><strong>장르 : </strong>' + data.Genre + '</p>';
                    movieInfo += '<p><strong>감독 : </strong>' + data.Director + '</p>';
                    movieInfo += '<p><strong>작가 : </strong>' + data.Writer + '</p>';
                    movieInfo += '<p><strong>배우 : </strong>' + data.Actors + '</p>';
                    movieInfo += '<p><strong>개봉일 : </strong>' + data.Released + '</p>';
                    movieInfo += '<p><strong>상영시간 : </strong>' + data.Runtime + '</p>';
                    movieInfo += '<p><strong></strong>' + '<img src = "' + data.Poster + '"></p>'; 
                    document.getElementById('movieInfo').innerHTML = movieInfo;

                    //검색 목록을 저장
                    searchedMovieTitles.push(data.Title);
                    updateSearchedMovieTitles();
                }
            }else{
                alert("영화 정보를 가져오는데 실패했습니다.");
            }
        }
    };
    xhr.open("GET",'http://www.omdbapi.com/?i=tt3896198&apikey=c7951224&t='+ encodeURIComponent(movieTitle),true);
    xhr.send();
}
// //검색 목록 업데이트 함수
// function updateSearchedMovieTitles() {
//     let movieTitlesElement = document.getElementById("movieTitles");
//     movieTitlesElement.innerHTML = "";
//     let onlyMovieTitles = new Set(searchedMovieTitles);       //중복된 영화는 제거하도록 수정

//     onlyMovieTitles.forEach((title) => {
//         let titleDiv = document.createElement("div");
//         let titleButton = document.createElement("button");
//         titleButton.textContent = title;
//         titleButton.addEventListener("click", createButtonClickHandler(title));         //히스토리 버튼 제목을 클릭하면 해당 영화 정보 업로드 -> 정상 동작하지 않음
//         titleDiv.appendChild(titleButton);
//         movieTitlesElement.appendChild(titleDiv);
//       });
//   }

//   function createButtonClickHandler(title) {
//     return function () {
//       loadMovieInfo(title);
//     };
// }