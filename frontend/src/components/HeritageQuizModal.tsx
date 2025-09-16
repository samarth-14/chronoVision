import React, { useState } from 'react';
import { BaseModal } from './ui/base-modal';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Brain, CheckCircle, XCircle, Trophy, Star, RefreshCw, BookOpen } from 'lucide-react';

import { type HeritageSite } from '../data/heritage-sites';

interface HeritageQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  site: HeritageSite | null;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

/**
 * Heritage Quiz Modal - interactive quiz about heritage sites
 * Features: multiple choice questions, progress tracking, and detailed explanations
 */
export function HeritageQuizModal({ isOpen, onClose, site }: HeritageQuizModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  if (!site) return null;

  // Template quiz data - this would be populated from a CMS or quiz management system
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: `In which century was ${site.title} primarily constructed?`,
      options: [
        "6th-8th Century",
        "8th-12th Century", 
        "12th-16th Century",
        "16th-18th Century"
      ],
      correctAnswer: 1,
      explanation: "The site was primarily constructed during the 8th-12th century period, representing the golden age of Indian temple architecture.",
      difficulty: 'easy'
    },
    {
      id: 2,
      question: `What architectural style is ${site.title} primarily known for?`,
      options: [
        "Dravidian Architecture",
        "Nagara Architecture",
        "Indo-Islamic Architecture",
        "Vesara Architecture"
      ],
      correctAnswer: 0,
      explanation: "The site exemplifies the Dravidian architectural style, characterized by its distinctive features and regional influences.",
      difficulty: 'medium'
    },
    {
      id: 3,
      question: `Which deity or historical figure is ${site.title} primarily associated with?`,
      options: [
        "Lord Shiva",
        "Lord Vishnu",
        "Goddess Devi",
        "Historical Ruler"
      ],
      correctAnswer: 0,
      explanation: "The site is primarily dedicated to Lord Shiva, reflecting the spiritual and cultural traditions of the region.",
      difficulty: 'easy'
    },
    {
      id: 4,
      question: `What makes ${site.title} architecturally unique?`,
      options: [
        "Its astronomical alignments",
        "Underground chambers",
        "Intricate stone carvings",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "The site combines multiple unique features including astronomical alignments, underground chambers, and intricate stone carvings, making it architecturally remarkable.",
      difficulty: 'hard'
    },
    {
      id: 5,
      question: `What is the cultural significance of ${site.title} in modern times?`,
      options: [
        "Tourist destination only",
        "Active place of worship and cultural center",
        "Museum and monument",
        "Research facility"
      ],
      correctAnswer: 1,
      explanation: "The site continues to serve as an active place of worship and cultural center, maintaining its living heritage status while welcoming visitors.",
      difficulty: 'medium'
    }
  ];

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getDifficultyBadge = (difficulty: string) => {
    const colors = {
      easy: 'bg-green-500/20 text-green-300',
      medium: 'bg-yellow-500/20 text-yellow-300',
      hard: 'bg-red-500/20 text-red-300'
    };
    return colors[difficulty as keyof typeof colors];
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={`Heritage Quiz - ${site.title}`}
      description={`Interactive quiz about the history, architecture, and cultural significance of ${site.title}`}
      maxWidth="4xl"
      customScrollbar={true}
      className="p-0"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <Brain className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold gradient-text">
                {site.title} Heritage Quiz
              </h2>
              {!showResults && quizStarted && (
                <p className="text-sm text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 p-6">
            {!quizStarted ? (
              /* Quiz Introduction */
              <div className="text-center space-y-6 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    Test Your Knowledge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Challenge yourself with questions about the rich history, stunning architecture, 
                    and cultural significance of {site.title}. Learn fascinating facts while testing 
                    your heritage knowledge!
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{totalQuestions}</div>
                    <div className="text-sm text-muted-foreground">Questions</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">~5</div>
                    <div className="text-sm text-muted-foreground">Minutes</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">3</div>
                    <div className="text-sm text-muted-foreground">Difficulty Levels</div>
                  </div>
                </div>

                <Button 
                  onClick={() => setQuizStarted(true)}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Quiz
                </Button>
              </div>
            ) : showResults ? (
              /* Quiz Results */
              <div className="text-center space-y-6 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-10 w-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">Quiz Complete!</h3>
                  <div className={`text-4xl font-bold mb-4 ${getScoreColor(calculateScore())}`}>
                    {calculateScore()} / {totalQuestions}
                  </div>
                  <p className="text-muted-foreground">
                    {calculateScore() === totalQuestions 
                      ? "Perfect! You're a true heritage expert!" 
                      : calculateScore() >= totalQuestions * 0.8 
                      ? "Excellent! You know your heritage well!" 
                      : calculateScore() >= totalQuestions * 0.6 
                      ? "Good job! Keep learning about heritage!" 
                      : "Great effort! There's always more to discover!"}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-left">Review Your Answers:</h4>
                  {quizQuestions.map((question, index) => {
                    const userAnswer = selectedAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    
                    return (
                      <Card key={question.id} className="glass text-left">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="mt-1">
                              {isCorrect ? (
                                <CheckCircle className="h-5 w-5 text-green-400" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-400" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium text-sm">{question.question}</h5>
                                <Badge className={getDifficultyBadge(question.difficulty)}>
                                  {question.difficulty}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mb-2">
                                Your answer: {question.options[userAnswer]} 
                                {!isCorrect && ` • Correct: ${question.options[question.correctAnswer]}`}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {question.explanation}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="flex gap-3 justify-center">
                  <Button 
                    onClick={resetQuiz}
                    variant="outline"
                    className="glass"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                  <Button onClick={onClose}>
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              /* Quiz Questions */
              <div className="space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question */}
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getDifficultyBadge(currentQuestion.difficulty)}>
                        {currentQuestion.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        Question {currentQuestionIndex + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-6">
                      {currentQuestion.question}
                    </h3>
                    
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswers[currentQuestionIndex] === index ? "default" : "outline"}
                          className="w-full justify-start text-left p-4 h-auto glass hover:bg-primary/10"
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span>{option}</span>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation */}
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="glass"
                  >
                    Previous
                  </Button>
                  
                  <Button 
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                  >
                    {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    </BaseModal>
  );
}