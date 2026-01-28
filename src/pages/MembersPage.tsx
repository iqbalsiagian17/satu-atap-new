import { Link } from 'react-router-dom';
import { members } from '../data/members';

const MembersPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Members
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Meet the 11 amazing individuals who make SATU ATAP special
          </p>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member) => (
              <Link
                key={member.id}
                to={`/members/${member.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                    <p className="text-gray-700 text-sm line-clamp-3">{member.bio}</p>
                    <div className="mt-4 text-green-600 font-semibold text-sm group-hover:text-green-700">
                      View Profile →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembersPage;
