import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-t-gray-200 pt-8 pb-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Job Hunt</h2>

                    </div>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                      <a
  href="https://github.com/AkashTyagiCSIT"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-gray-400"
  aria-label="GitHub"
>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
             3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
             0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
             -.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 
             1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 
             3.492.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.334-5.466-5.93 
             0-1.31.468-2.38 1.235-3.22-.123-.304-.536-1.527.117-3.176 
             0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 
             1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23 
             .655 1.649.242 2.872.12 3.176.77.84 1.233 1.91 1.233 3.22 
             0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 
             0 1.606-.015 2.898-.015 3.293 0 .321.216.694.825.576C20.565 22.092 
             24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
  </svg>
</a>

                        <a href="https://x.com/AkashTyagi_CSIT" className="hover:text-gray-400" aria-label="Twitter">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/akashtyagicsit/" className="hover:text-gray-400" aria-label="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
                        </a>
                    </div>
                </div>
                <div className='text-center mb-0'>
                    <p className="text-sm">© 2025 JobHunt. Made with Love ❤️.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
