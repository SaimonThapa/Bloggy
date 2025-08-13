const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="text-lg text-center leading-relaxed text-stone-800">
        Just a simple blog app I made while learning React, Tailwind, 
        and CRUD operations. It uses React Router for navigation and 
        connects to my own database to handle post data. <br /><br />It's a single 
        page app (SPA) that lets you add, 
        edit, and delete posts. Nothing fancy just me practicing and 
        figuring basics on my own.
      </p>
    </div>
  )
}

export default About;
