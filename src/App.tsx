import React from 'react'
import { useState } from 'react'
import './App.css'
import UnityGame from './components/unity/UnityGame'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">My Unity Game Website</h1>
        <p className="text-xl opacity-90">Welcome to my interactive Unity game website</p>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <section className="mb-8">
          <UnityGame gameTitle="My Awesome Unity Game" />
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Game</h2>
          <p className="text-gray-600 mb-4">
            This is where you can add information about your Unity game.
            Describe gameplay, controls, and any other relevant details.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Controls</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>WASD or Arrow Keys: Movement</li>
              <li>Space: Jump/Action</li>
              <li>Mouse: Look around</li>
              <li>Click: Interact</li>
            </ul>
          </div>
        </section>
      </main>
      
      <footer className="bg-blue-900 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} My Unity Game Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
