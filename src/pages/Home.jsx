import React from 'react'
import WallStreet from '../assets/wallstreet.jpg'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#2fcf6f5ff]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex justify-center mb-6'>
          <img src={WallStreet} alt="Building of Wall Street" className='max-w-sm'/>
        </div>
        <h1 className='text-5xl mb-4'>"Let's Talk Stocks: A Beginner's Blog for Exploring the Exciting World of the Stock Market"</h1>
        <p className='text-xl'>Welcome to "Let's Talk Stocks: A Beginner's Blog for Exploring the Exciting World of the Stock Market"! If you're interested in learning more about the stock market but don't know where to start, you're in the right place. Investing in stocks can be a great way to build wealth over time, but it can also be intimidating and overwhelming for beginners. That's why this blog is designed to provide a comprehensive and accessible introduction to the world of stocks and investing. Whether you're looking to invest in individual stocks or want to learn more about mutual funds and index funds, this blog has something for you. So let's get started and explore the exciting world of the stock market together!</p>
      </div>
    </div>
  )
}

export default Home