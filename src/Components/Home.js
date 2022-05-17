const Home = (props) => {
    return (  
        <div>
           <h1>Welcome</h1>
           <h3>Description of what the page is</h3>
           <form onSubmit={props.handleSubmit}>
               <input type='text' placeholder='Enter a recipe' onChange={props.handleChange} value={props.searchVal}></input>
               <input type='submit' ></input>
           </form>
        </div>
    );
}
 
export default Home;