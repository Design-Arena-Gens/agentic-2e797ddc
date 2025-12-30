'use client';

import { useState } from 'react';

const subjects = {
  physics: {
    name: 'Physics',
    icon: '⚛️',
    topics: [
      'Rotational Dynamics',
      'Mechanical Properties of Fluids',
      'Kinetic Theory of Gases',
      'Thermodynamics',
      'Oscillations',
      'Superposition of Waves',
      'Wave Optics',
      'Electrostatics',
      'Current Electricity',
      'Magnetic Fields',
      'Electromagnetic Induction',
      'Atoms, Molecules and Nuclei',
      'Semiconductors',
      'Communication Systems'
    ]
  },
  chemistry: {
    name: 'Chemistry',
    icon: '🧪',
    topics: [
      'Solid State',
      'Solutions',
      'Ionic Equilibrium',
      'Chemical Thermodynamics',
      'Electrochemistry',
      'Chemical Kinetics',
      'd-Block Elements',
      'Coordination Compounds',
      'Halogen Derivatives',
      'Alcohols, Phenols and Ethers',
      'Aldehydes, Ketones and Carboxylic Acids',
      'Amines',
      'Biomolecules',
      'Polymers',
      'Chemistry in Everyday Life'
    ]
  },
  mathematics: {
    name: 'Mathematics',
    icon: '📐',
    topics: [
      'Mathematical Logic',
      'Matrices',
      'Trigonometric Functions',
      'Pair of Straight Lines',
      'Vectors',
      'Three Dimensional Geometry',
      'Line',
      'Plane',
      'Linear Programming',
      'Continuity',
      'Differentiation',
      'Applications of Derivatives',
      'Indefinite Integration',
      'Definite Integration',
      'Applications of Definite Integration',
      'Differential Equations',
      'Probability Distributions',
      'Bernoulli Trials'
    ]
  },
  biology: {
    name: 'Biology',
    icon: '🧬',
    topics: [
      'Reproduction in Lower and Higher Plants',
      'Reproduction in Lower and Higher Animals',
      'Inheritance and Variation',
      'Molecular Basis of Inheritance',
      'Origin and Evolution of Life',
      'Plant Water Relations',
      'Plant Growth and Mineral Nutrition',
      'Respiration and Circulation',
      'Control and Coordination',
      'Human Health and Diseases',
      'Enhancement of Food Production',
      'Biotechnology',
      'Organisms and Populations',
      'Ecosystems and Energy Flow',
      'Biodiversity and Conservation'
    ]
  }
};

const sampleQuestions = {
  physics: [
    { q: 'State the law of conservation of angular momentum.', a: 'If the net external torque acting on a system is zero, the total angular momentum of the system remains constant.' },
    { q: 'Define coefficient of viscosity.', a: 'The coefficient of viscosity is defined as the tangential force per unit area required to maintain unit velocity gradient between two parallel layers of fluid.' },
    { q: 'State first law of thermodynamics.', a: 'The first law of thermodynamics states that energy can neither be created nor destroyed, but can be converted from one form to another. ΔQ = ΔU + ΔW' }
  ],
  chemistry: [
    { q: 'Define molar conductivity.', a: 'Molar conductivity is the conducting power of all the ions produced by dissolving one mole of an electrolyte in a solution.' },
    { q: 'What is a unit cell?', a: 'A unit cell is the smallest portion of a crystal lattice which, when repeated in different directions, generates the entire lattice.' },
    { q: 'State Raoult\'s law.', a: 'Raoult\'s law states that the partial vapour pressure of a component in a solution is equal to the mole fraction of that component multiplied by its vapour pressure in the pure state.' }
  ],
  mathematics: [
    { q: 'Define a tautology.', a: 'A tautology is a statement pattern that is always true, regardless of the truth values of its components.' },
    { q: 'What is the order of a matrix?', a: 'The order of a matrix is expressed as m × n, where m is the number of rows and n is the number of columns.' },
    { q: 'Define continuity of a function at a point.', a: 'A function f(x) is continuous at point x = a if: 1) f(a) is defined, 2) lim(x→a) f(x) exists, and 3) lim(x→a) f(x) = f(a).' }
  ],
  biology: [
    { q: 'What is double fertilization?', a: 'Double fertilization is a process unique to angiosperms where one male gamete fuses with the egg cell (syngamy) and another male gamete fuses with the polar nuclei (triple fusion) to form endosperm.' },
    { q: 'Define totipotency.', a: 'Totipotency is the ability of a single cell to divide and produce all differentiated cells in an organism, including extraembryonic tissues.' },
    { q: 'What is plasmid?', a: 'A plasmid is an extrachromosomal, self-replicating, circular DNA molecule found in bacteria that can be used as a vector in genetic engineering.' }
  ]
};

const studyTips = [
  '📚 Review your textbook and make concise notes',
  '✍️ Practice previous year question papers',
  '🎯 Focus on important derivations and diagrams',
  '⏰ Create a study timetable and stick to it',
  '🤝 Form study groups for discussion',
  '📝 Solve numerical problems daily',
  '💡 Understand concepts, don\'t just memorize',
  '🔄 Revise regularly to retain information'
];

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyMode, setStudyMode] = useState('topics'); // 'topics', 'quiz', 'tips'

  const handleSubjectSelect = (subjectKey) => {
    setSelectedSubject(subjectKey);
    setSelectedTopic(null);
    setShowQuiz(false);
    setStudyMode('topics');
  };

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
      setShowQuiz(false);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    }
    setStudyMode('topics');
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setShowAnswer(false);
    setStudyMode('quiz');
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions[selectedSubject].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#667eea',
            margin: '0 0 10px 0',
            fontWeight: '700'
          }}>
            🎓 Maharashtra Board Study Agent
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            margin: 0
          }}>
            Class 12th HSC - Complete Study Platform
          </p>
        </div>

        {/* Back Button */}
        {(selectedSubject || selectedTopic) && (
          <button
            onClick={handleBack}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginBottom: '20px',
              fontWeight: '600'
            }}
          >
            ← Back
          </button>
        )}

        {/* Subject Selection */}
        {!selectedSubject && (
          <div>
            <h2 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>
              Select Your Subject
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {Object.entries(subjects).map(([key, subject]) => (
                <button
                  key={key}
                  onClick={() => handleSubjectSelect(key)}
                  style={{
                    padding: '30px',
                    fontSize: '18px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    fontWeight: '600',
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
                    {subject.icon}
                  </div>
                  {subject.name}
                </button>
              ))}
            </div>

            {/* Quick Tips */}
            <div style={{
              marginTop: '40px',
              padding: '30px',
              background: '#f8f9ff',
              borderRadius: '15px'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '20px' }}>
                📖 Study Tips for HSC Success
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '15px'
              }}>
                {studyTips.map((tip, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '15px',
                      background: 'white',
                      borderRadius: '10px',
                      fontSize: '14px',
                      color: '#555',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Subject Dashboard */}
        {selectedSubject && !showQuiz && (
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '30px'
            }}>
              <h2 style={{ color: '#333', margin: 0 }}>
                {subjects[selectedSubject].icon} {subjects[selectedSubject].name}
              </h2>
              <button
                onClick={startQuiz}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                📝 Practice Questions
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '15px'
            }}>
              {subjects[selectedSubject].topics.map((topic, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '20px',
                    background: '#f8f9ff',
                    borderRadius: '10px',
                    border: '2px solid #e0e7ff',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#e0e7ff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#f8f9ff';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => setSelectedTopic(topic)}
                >
                  <div style={{ fontWeight: '600', color: '#667eea', fontSize: '14px' }}>
                    Chapter {idx + 1}
                  </div>
                  <div style={{ marginTop: '8px', color: '#333', fontSize: '15px' }}>
                    {topic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Topic Details */}
        {selectedTopic && !showQuiz && (
          <div style={{
            padding: '30px',
            background: '#f8f9ff',
            borderRadius: '15px'
          }}>
            <h2 style={{ color: '#667eea', marginBottom: '20px' }}>
              {selectedTopic}
            </h2>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#333', fontSize: '18px', marginBottom: '15px' }}>
                📚 Study Resources
              </h3>
              <div style={{
                padding: '20px',
                background: 'white',
                borderRadius: '10px',
                marginBottom: '15px'
              }}>
                <h4 style={{ color: '#667eea', marginTop: 0 }}>Key Points to Remember:</h4>
                <ul style={{ color: '#555', lineHeight: '1.8' }}>
                  <li>Review all definitions and concepts from your textbook</li>
                  <li>Practice derivations and numerical problems</li>
                  <li>Make diagrams and flowcharts for better understanding</li>
                  <li>Solve previous year board questions</li>
                  <li>Focus on important formulas and theorems</li>
                </ul>
              </div>

              <div style={{
                padding: '20px',
                background: 'white',
                borderRadius: '10px'
              }}>
                <h4 style={{ color: '#667eea', marginTop: 0 }}>Recommended Study Plan:</h4>
                <ul style={{ color: '#555', lineHeight: '1.8' }}>
                  <li><strong>Day 1-2:</strong> Read and understand the complete chapter</li>
                  <li><strong>Day 3:</strong> Make concise notes and diagrams</li>
                  <li><strong>Day 4-5:</strong> Solve textbook exercises and examples</li>
                  <li><strong>Day 6:</strong> Practice previous year questions</li>
                  <li><strong>Day 7:</strong> Revise and clarify doubts</li>
                </ul>
              </div>
            </div>

            <button
              onClick={startQuiz}
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: '600',
                width: '100%'
              }}
            >
              📝 Test Your Knowledge
            </button>
          </div>
        )}

        {/* Quiz Section */}
        {showQuiz && selectedSubject && (
          <div style={{
            padding: '30px',
            background: '#f8f9ff',
            borderRadius: '15px'
          }}>
            <h2 style={{ color: '#667eea', marginBottom: '20px' }}>
              Practice Questions - {subjects[selectedSubject].name}
            </h2>

            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#667eea',
                fontWeight: '600',
                marginBottom: '15px'
              }}>
                Question {currentQuestion + 1} of {sampleQuestions[selectedSubject].length}
              </div>

              <div style={{
                fontSize: '18px',
                color: '#333',
                marginBottom: '20px',
                fontWeight: '600',
                lineHeight: '1.6'
              }}>
                {sampleQuestions[selectedSubject][currentQuestion].q}
              </div>

              {showAnswer && (
                <div style={{
                  padding: '20px',
                  background: '#d1fae5',
                  borderRadius: '8px',
                  marginTop: '20px',
                  borderLeft: '4px solid #10b981'
                }}>
                  <div style={{
                    fontSize: '14px',
                    color: '#059669',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Answer:
                  </div>
                  <div style={{ color: '#065f46', lineHeight: '1.6' }}>
                    {sampleQuestions[selectedSubject][currentQuestion].a}
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowAnswer(!showAnswer)}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  background: showAnswer ? '#667eea' : '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  marginTop: '20px',
                  width: '100%'
                }}
              >
                {showAnswer ? '🔒 Hide Answer' : '🔓 Show Answer'}
              </button>
            </div>

            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'space-between'
            }}>
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  background: currentQuestion === 0 ? '#ccc' : '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  flex: 1
                }}
              >
                ← Previous
              </button>
              <button
                onClick={nextQuestion}
                disabled={currentQuestion === sampleQuestions[selectedSubject].length - 1}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  background: currentQuestion === sampleQuestions[selectedSubject].length - 1 ? '#ccc' : '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentQuestion === sampleQuestions[selectedSubject].length - 1 ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  flex: 1
                }}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          padding: '20px',
          textAlign: 'center',
          color: '#666',
          borderTop: '2px solid #e0e7ff'
        }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
            💡 Study regularly and stay consistent for HSC success!
          </p>
          <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>
            Maharashtra State Board - Class 12th Study Platform
          </p>
        </div>
      </div>
    </div>
  );
}
