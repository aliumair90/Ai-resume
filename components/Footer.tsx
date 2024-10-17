import Link from "next/link";
import {
  FaLinkedin,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaReddit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and CTA */}
          <div>
            <h2 className="text-4xl font-extrabold">Rezi</h2>
            <p className="text-base text-gray-500 mt-2">
              Join over 2,890,927 job seekers helped since September 2019
            </p>
          </div>

          {/* Column 1: AI Writer */}
          <div>
            <h3 className="text-base font-bold text-gray-800">AI Writer</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/writer">Writer</Link>
              </li>
              <li>
                <Link href="/editor">Editor</Link>
              </li>
              <li>
                <Link href="/cover-letter">Cover Letter</Link>{" "}
                <span className="text-green-500 ml-1 text-xs">New</span>
              </li>
              <li>
                <Link href="/summary">Summary</Link>
              </li>
              <li>
                <Link href="/resignation-letter">Resignation Letter</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Examples */}
          <div>
            <h3 className="text-base font-bold text-gray-800">Examples</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/resumes">Resumes</Link>
              </li>
              <li>
                <Link href="/cover-letters">Cover Letters</Link>
              </li>
              <li>
                <Link href="/resignation-letters">Resignation Letters</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-base font-bold text-gray-800">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/linkedin-extension">LinkedIn Extension</Link>
              </li>
              <li>
                <Link href="/white-label">White Label</Link>{" "}
                <span className="text-green-500 ml-1 text-xs">New</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Content */}
          <div>
            <h3 className="text-base font-bold text-gray-800">Content</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/blog">Rezi Blog</Link>
              </li>
              <li>
                <Link href="/guides">User Guides</Link>
              </li>
              <li>
                <Link href="/reviews">User Reviews</Link>
              </li>
              <li>
                <Link href="/authors">Authors</Link>
              </li>
              <li>
                <Link href="/editorial-process">Editorial Process</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h3 className="text-base font-bold text-gray-800">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-base text-gray-600">
            <span>© 2024 Rezi</span>
            <span className="mx-4">|</span>
            <Link href="/terms" className="hover:underline">
              Terms & Privacy
            </Link>
            <span className="mx-4">|</span>
            <Link href="/changelog" className="hover:underline">
              Product Changelog
            </Link>
          </div>

          {/* Social Icons */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-gray-500 hover:text-gray-900"
                size={20}
              />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok
                className="text-gray-500 hover:text-gray-900"
                size={20}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-gray-500 hover:text-gray-900"
                size={20}
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="text-gray-500 hover:text-gray-900"
                size={20}
              />
            </a>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit
                className="text-gray-500 hover:text-gray-900"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
