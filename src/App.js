import './App.css';
import { useCreatePostMutation, useDeletePostMutation, useGetAllPostQuery, useGetLimitPostQuery, useGetPostByIdQuery, useUpdatePostMutation } from './services/post';

function App() {

  const response = useGetAllPostQuery();

  const dataid = useGetPostByIdQuery(10)

  const limitdata = useGetLimitPostQuery(5);

  const [deletePost, responsedata] = useDeletePostMutation();

  const [createPost, responsecreate] = useCreatePostMutation();

  const [updatePost,updatePostdata] = useUpdatePostMutation();

  // console.log("delete",responsedata.isSuccess)

  console.log("create", responsecreate.isSuccess)

  console.log(updatePostdata.data)


  const newpost = {
    title: "hello sumit",
    body: "hi there ",
    userId:1
  }

  const updatepostdata = {
    id: 1,
    title: "new data",
    body: "hello data",
    userId:1
  }


  return (
    <div className="App">
      {
       limitdata.data && limitdata.data.map((elem, id) =>
          <div className="main_div" key={elem.id}>
           <h3>{elem.id}.{" "}{elem.title}</h3>
           <p>{elem.body}</p>
           {/* check in console its deleted message gives is success false to true */}
           <button className='btn' onClick={() => deletePost(elem.id)}>Delete</button>
           <hr/>
          </div>
        )
      }
      <button className='btn' onClick={() => createPost(newpost)}>Create</button>
      <button className='btn' onClick={() => updatePost(updatepostdata)}>Update</button>
    </div>
  );
}

export default App;
