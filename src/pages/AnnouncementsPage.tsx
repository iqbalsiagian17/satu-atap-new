import { announcements } from '../data/announcements';

const AnnouncementsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Announcements
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Stay updated with the latest news and events from SATU ATAP
          </p>
        </div>
      </section>

      {/* Announcements List */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  {announcement.image && (
                    <div className="md:w-1/3">
                      <img
                        src={announcement.image}
                        alt={announcement.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-8 ${announcement.image ? 'md:w-2/3' : 'w-full'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                        announcement.category === 'event'
                          ? 'bg-green-100 text-green-800'
                          : announcement.category === 'news'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {announcement.category.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(announcement.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {announcement.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 text-lg">
                      {announcement.excerpt}
                    </p>
                    
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {announcement.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Submit an Announcement?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have news or events to share with the community? Get in touch with us!
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AnnouncementsPage;
