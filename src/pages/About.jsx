import React from 'react'
import Particulas from '../components/Particles'

function About() {
  return (
    <>
      <Particulas />
      <div className='relative z-20 w-full h-full pb-16 px-3 flex justify-start bgTom'>

        <div className='max-768:w-full w-1/2 h-max mt-5 p-6 rounded bg-black/50'>
          <h1 className='text-5xl'>Historia</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore beatae culpa blanditiis earum. Tenetur quos ullam laboriosam delectus, voluptatibus cupiditate labore? Ex nobis rem dolorem recusandae, nostrum maxime sint eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eum totam modi eius reiciendis placeat temporibus molestiae deleniti dolores doloribus laudantium sunt omnis ducimus suscipit voluptas nam autem, facilis dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa, iure ullam quia harum quos provident assumenda voluptate! Ipsam ab ut repudiandae distinctio quam esse tempora quaerat quisquam debitis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus corrupti perferendis rem minus facere quam inventore officia tenetur eligendi ducimus cumque, molestias autem temporibus. Soluta tenetur enim maiores et ducimus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore , voluptatibus corem recusandae, nostrum maxime sint eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eum totam modi eius reiciendis placeat temporibus molestiae deleniti dolores doloribus laudantium sunt omnis ducimus suscipit voluptas nam autem, facilis dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa, iure ullam quia harum quos provident assumenda voluptate! Ipsam ab ut repudiandae distinctio quam esse tempora quaerat quisquam debitis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus corrupti perferendis rem minus facere quam inventore officia tenetur eligendi ducimus cumque, molestias autem temporibus. Soluta tenetur enim maiores et ducimus!
          
          </p>
        </div>

        {/*<img className='max-w-lg max-768:hidden' src="src/assets/imgTom1.webp" alt="" />*/}
      </div>
    </>
  )
}

export default About