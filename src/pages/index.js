import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Nodeque - Bootstrap Integration</title>
        <meta name="description" content="Next.js app with Bootstrap integration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={25}
              priority
            />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bootstrap Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to Nodeque</h1>
          <p className="lead">Your Next.js app with Bootstrap integration</p>
          <button className="btn btn-light btn-lg" type="button">
            Get Started
          </button>
        </div>
      </div>

      {/* Bootstrap Cards Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Bootstrap Integration</h5>
                <p className="card-text">
                  Successfully integrated Bootstrap 5 with Next.js. You can now use all Bootstrap components and utilities.
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Responsive Design</h5>
                <p className="card-text">
                  Bootstrap's responsive grid system and components work seamlessly with Next.js.
                </p>
                <a href="#" className="btn btn-success">View Examples</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Modern UI</h5>
                <p className="card-text">
                  Create beautiful, modern user interfaces with Bootstrap's comprehensive component library.
                </p>
                <a href="#" className="btn btn-info">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Alert */}
      <div className="container">
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> Bootstrap has been successfully integrated into your Next.js application.
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        </div>
      </div>

      {/* Bootstrap Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Nodeque</h5>
              <p>Built with Next.js and Bootstrap</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="https://nextjs.org" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                Next.js
              </a>
              <a href="https://getbootstrap.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                Bootstrap
              </a>
              <a href="https://vercel.com" className="text-light" target="_blank" rel="noopener noreferrer">
                Vercel
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
