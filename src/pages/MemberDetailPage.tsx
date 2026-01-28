import { useParams, Link } from 'react-router-dom';
import { members } from '../data/members';

const MemberDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = members.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Member Not Found</h1>
          <Link to="/members" className="text-blue-600 hover:text-blue-700">
            Back to Members
          </Link>
        </div>
      </div>
    );
  }

  // Unique color schemes for each member
  const colorSchemes = [
    { bg: 'from-blue-500 to-blue-700', accent: 'blue', cardBg: 'bg-blue-50' },
    { bg: 'from-pink-500 to-pink-700', accent: 'pink', cardBg: 'bg-pink-50' },
    { bg: 'from-purple-500 to-purple-700', accent: 'purple', cardBg: 'bg-purple-50' },
    { bg: 'from-green-500 to-green-700', accent: 'green', cardBg: 'bg-green-50' },
    { bg: 'from-orange-500 to-orange-700', accent: 'orange', cardBg: 'bg-orange-50' },
    { bg: 'from-red-500 to-red-700', accent: 'red', cardBg: 'bg-red-50' },
    { bg: 'from-indigo-500 to-indigo-700', accent: 'indigo', cardBg: 'bg-indigo-50' },
    { bg: 'from-teal-500 to-teal-700', accent: 'teal', cardBg: 'bg-teal-50' },
    { bg: 'from-cyan-500 to-cyan-700', accent: 'cyan', cardBg: 'bg-cyan-50' },
    { bg: 'from-fuchsia-500 to-fuchsia-700', accent: 'fuchsia', cardBg: 'bg-fuchsia-50' },
    { bg: 'from-emerald-500 to-emerald-700', accent: 'emerald', cardBg: 'bg-emerald-50' },
  ];

  const scheme = colorSchemes[(member.id - 1) % colorSchemes.length];

  return (
    <div className="bg-white">
      {/* Hero Section with unique gradient */}
      <section className={`relative bg-gradient-to-r ${scheme.bg} text-white py-16 md:py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/members" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Members
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{member.name}</h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">{member.role}</p>
              <p className="text-lg opacity-80 max-w-2xl">{member.bio}</p>
              
              {member.socialMedia && (
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                  {member.socialMedia.linkedin && (
                    <a
                      href={member.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-700 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.socialMedia.instagram && (
                    <a
                      href={member.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-700 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {member.socialMedia.twitter && (
                    <a
                      href={member.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-700 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-${scheme.accent}-600 mb-6`}>Background</h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {member.background}
          </p>

          {member.email && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{' '}
                <a href={`mailto:${member.email}`} className={`text-${scheme.accent}-600 hover:underline`}>
                  {member.email}
                </a>
              </p>
              {member.phone && (
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Phone:</span> {member.phone}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Custom Sections */}
      {member.customSections && member.customSections.length > 0 && (
        <section className={`py-16 ${scheme.cardBg}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {member.customSections.map((section, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className={`text-2xl font-bold text-${scheme.accent}-600 mb-4`}>
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photos Gallery */}
      {member.photos && member.photos.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-${scheme.accent}-600 mb-8`}>Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {member.photos.map((photo, index) => (
                <div key={index} className="aspect-video overflow-hidden rounded-xl shadow-md">
                  <img
                    src={photo}
                    alt={`${member.name} - Photo ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MemberDetailPage;
