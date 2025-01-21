import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='py-8 roboto'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
          <a
              href='https://linkedin.com/in/sune-kara'
              target='_blank'
              rel='noreferrer noopener'
              className='text-muted-foreground hover:text-foreground'
            >
              <span className='sr-only'>Linkedin</span>
              <FaLinkedinIn aria-hidden='true' className='h-10 w-10' />
            </a>
            <a
              href='https://github.com/gitkarasune'
              target='_blank'
              rel='noreferrer noopener'
              className='text-muted-foreground hover:text-foreground'
            >
              <span className='sr-only'>Github</span>
              <FaGithub aria-hidden='true' className='h-10 w-10' />
            </a>
          </div>
          <div className='mt-8 md:order-11 md:mt-0'>
            <p className='text-center text-md leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
