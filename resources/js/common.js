// new Vue ({
//     el: '#app',
//     data: {
//         posts: []
//     },
//     created() {
//         fetch('../data/list.json')
//         .then((response) => {
//             if(response.ok) {
//                 return response.json();
//             }
//             throw new Error('Network response was not ok!');
//         })
//         .then((json) => {
//             this.posts.push({
//                 postId: json.postId,
//                 postType: json.postType,
//                 userId: json.user.userId
//             });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     }
// });

// new Vue = ({
//     el: '#todos',
//     data: {
//         template: '<td>{{ postId }}</td>'
//     }
// });