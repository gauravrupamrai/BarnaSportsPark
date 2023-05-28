import React from 'react'
import Sidebar from './Sidebar';

const UserLayout = () => {
  return (
    <div className='grid min-h-screen grid-cols-[auto_1fr] justify-center gap-4 overflow-hidden p-4'>
      <aside class="flex h-[calc(100vh_-_2rem)] w-20 flex-col items-center justify-between bg-slate-500 py-6">
      <Sidebar />
      </aside>
      
      <div class="h-[calc(100vh_-_2rem)] w-full overflow-y-scroll">
      <main class="min-h-screen w-full bg-slate-300 p-4">
        Main Content
      </main>
      </div>
    </div>
  )
}

export default UserLayout;