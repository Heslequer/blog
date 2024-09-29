import Post from '../Post'
function Article(){
    return(
        <section className='container'>
            <h3>Article</h3>
            <div className='mt-3 container-posts'>
            <Post subtitle='tecnologia' title='O gui definitivo sobre o blog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellantesque. Utricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus,ringilla ullamcorper sapien nibh.  
            </  Post>
            <Post subtitle='fotografia' title='Quais as melhores câmeras em 2021'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellantesque. Utricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus,ringilla ullamcorper sapien nibh.
            </Post>
            <Post subtitle='cinema' title='Os 10 filmes com maior bilheteria'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellantesque. Utricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus,ringilla ullamcorper sapien nibh.
            </Post>
            </div>
        </section>
       
    );
}
export default Article