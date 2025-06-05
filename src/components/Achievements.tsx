import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-8 h-8 text-accent-500" />,
  trophy: <Trophy className="w-8 h-8 text-accent-500" />,
  medal: <Medal className="w-8 h-8 text-accent-500" />,
};

const Achievements: React.FC = () => {
  const { achievements } = usePortfolio();

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Recognition and milestones that highlight my professional journey and accomplishments.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(achievements.items || [
            {
              title: "Innovation Award",
              description: "Received for developing a groundbreaking solution that increased client productivity by 35%.",
              year: "2023",
              icon: "trophy"
            },
            {
              title: "Industry Recognition",
              description: "Named among the Top 50 Developers by Industry Magazine for contributions to open source.",
              year: "2022",
              icon: "award"
            },
            {
              title: "Project Excellence",
              description: "Led a team that delivered a complex project under budget and ahead of schedule.",
              year: "2021",
              icon: "medal"
            },
            {
              title: "Performance Recognition",
              description: "Achieved the highest client satisfaction rating in the company for three consecutive quarters.",
              year: "2020",
              icon: "trophy"
            },
            {
              title: "Technical Publication",
              description: "Published a widely-cited article on modern development practices in a leading industry journal.",
              year: "2019",
              icon: "award"
            },
            {
              title: "Hackathon Winner",
              description: "First place in a competitive hackathon for developing an innovative accessibility solution.",
              year: "2018",
              icon: "medal"
            }
          ]).map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {iconMap[achievement.icon] || <Award className="w-8 h-8 text-accent-500" />}
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-500">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;