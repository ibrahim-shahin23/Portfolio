import React from 'react'

export default function Projects() {
  return (
    <div className='d-flex gap-5 p-5'>
      <h1 className='col-4 text-center' >Projects</h1>
      <div className='d-flex gap-5 flex-column' >
      <div>
      <p>
      Movies App, A front-end web application using React.js and Redux toolkit
      The app allows users to view movies in different languages from the movie database API, search for their preferred movies, add movies to their wish list and display recommended movies.      </p>
      <a href='https://movie-app-git-main-ahmed-fathalla-s-projects.vercel.app/' target='_blank' className='btn btn-dark'>Show Project</a>
      </div>
      <div>
      <p>
      Inventory Management System, A full-stack web application using Django framework
      A centralized system that keeps track of shipments of products delivered to the warehouse from the factory, and products delivered to supermarkets (orders).
      </p>
      <a href='https://salahethaer.pythonanywhere.com/dashboard/' target='_blank' className='btn btn-dark'>Show Project</a>
      </div>
      <div>
      <p>
      Technify Electronics Store Designed an e-commerce web application for electronics shopping. Technologies: HTML5, CSS3, Bootstrap, JavaScript, jQuery.
      </p>
      <a href='https://nouranelshazly.github.io/CST-Project/pages/home.html' target='_blank' className='btn btn-dark'>Show Project</a>
      </div>
      <div>
      <p>
      News Application with React.js Built an application to fetch and display the latest news, gold prices, and currency exchange rates using appropriate APIs.      </p>
      <a href='https://drive.google.com/file/d/1fXV36kPQVsEZkMbzQnw0iCn4gpWWw40K/view?usp=sharing' target='_blank' className='btn btn-dark'>Show Project</a>
      </div>
      </div>
    </div>
  )
}
