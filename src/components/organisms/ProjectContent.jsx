import React from 'react'
import Skeleton from '../atoms/Skeleton'
import projects from "../../content/projectMetaData"

const ProjectContent = () => {
    return (
        <>
            <main className='h-screen'>
                <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0'>
                    <div className='text-left'>
                        <h1 className='text-xl font-semibold sm:text-2xl md:text-3xl xl:text-3xl  py-5'>Projects</h1>
                        <p className='sm:w-[700px]'>
                            I&apos;ve worked on little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center p-4'>
                        {projects.map(project => (
                            <Skeleton key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectContent