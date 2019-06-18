// import React from 'react';
//
// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             fileUrl: '',
//         };
//
//         this.handleFile = this.handleFile.bind(this);
//     }
//
//     handleFile(e) {
//         e.preventDefault();
//
//         const data = new FormData();
//         data.append('file', this.uploadInput.files[0]);
//         data.append('filename', this.fileName.value);
//
//         fetch('http://localhost:4000/upload', {
//             method: 'POST',
//             body: data,
//         }).then((response) => {
//             response.json().then((body) => {
//                 this.setState({ fileUrl: `http://localhost:4000/${body.file}` });
//             });
//         });
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleFile}>
//                 <div>
//                     <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
//                 </div>
//                 <div>
//                     <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
//                 </div>
//                 <br />
//                 <div>
//                     <button>Upload</button>
//                 </div>
//                 <img src={this.state.fileUrl} alt="img" />
//             </form>
//         );
//     }
// }
//
// export default Main;
