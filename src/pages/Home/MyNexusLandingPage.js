"use client";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../../assets/images/IMG_4816.png";
import Img2 from "../../assets/images/IMG_4817.PNG";
import Img3 from "../../assets/images/IMG_4818.PNG";
import Img4 from "../../assets/images/IMG_4819.PNG";
import Img5 from "../../assets/images/IMG_4820.PNG";
import Img6 from "../../assets/images/IMG_4821.PNG";

import {
  ArrowRight,
  Play,
  Zap,
  Users,
  BarChart3,
  Shield,
  Star,
  Check,
  Menu,
  X,
  Phone,
  Mail,
  MessageSquare,
  Cloud,
  Database,
  FileText,
  CreditCard,
  BookOpen,
  UserCheck,
  GraduationCap,
  Bell,
  Calendar,
  Download,
  Clock,
  FileCheck,
  TrendingUp,
  Smartphone,
} from "lucide-react";
import { i } from "framer-motion/client";

const testimonialsSlide = [
  {
    image: Img1,

  },
  {
    image: Img2,

  },
  {
    image: Img3,

  },
  {
    image: Img4,

  },
  {
    image: Img5,

  },
  {
    image: Img6,

  },
];
export default function MyNexusLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitss = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };
  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thanks for your interest! We'll contact you soon.");
      setEmail("");
    }, 1500);
  };

  const modules = [
    {
      icon: Users,
      title: "For Parents",
      color: "bg-blue-100 text-nexusblue",
      features: [
        "Real-time attendance tracking",
        "Fee payment notifications",
        "Student performance monitoring",
        "Direct communication with teachers",
        "Event calendar access",
        "Grade and report card viewing"
      ]
    },
    {
      icon: UserCheck,
      title: "For Teachers",
      color: "bg-green-100 text-green-600",
      features: [
        "Attendance management system",
        "Assignment creation and distribution",
        "Gradebook management",
        "Student progress tracking",
        "Parent communication portal",
        "Class schedule organization"
      ]
    },
    {
      icon: GraduationCap,
      title: "For Students",
      color: "bg-purple-100 text-purple-600",
      features: [
        "Access to assignments and deadlines",
        "Grade and performance tracking",
        "Timetable and schedule viewer",
        "Study materials repository",
        "Communication with teachers",
        "Event and exam notifications"
      ]
    }
  ];

  const features = [
    {
      icon: CreditCard,
      title: "Fees Collection",
      description: "Seamless fee collection with multiple payment options and automatic receipts.",
    },
    {
      icon: Database,
      title: "Payment Gateway",
      description: "Secure integration with leading payment providers for hassle-free transactions.",
    },
    {
      icon: UserCheck,
      title: "Attendance Management",
      description: "Real-time tracking with automated notifications for parents and administrators.",
    },
    {
      icon: FileText,
      title: "Assignments",
      description: "Create, distribute, and grade assignments with a streamlined workflow.",
    },
    {
      icon: BarChart3,
      title: "Gradecards",
      description: "Comprehensive performance tracking with detailed analytics and reporting.",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Instant alerts for important updates, events, and academic information.",
    },
    {
      icon: Calendar,
      title: "Timetable Management",
      description: "Dynamic scheduling with automatic conflict resolution and updates.",
    },
    {
      icon: FileCheck,
      title: "Report Generation",
      description: "Customizable reports for academic performance, attendance, and fees.",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "School Principal",
      company: "Greenwood International",
      content:
        "MyNexus has transformed how we manage our school operations. The parent-teacher communication has never been smoother.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Parent",
      company: "Maplewood Academy",
      content:
        "I love getting real-time updates about my child's attendance and performance. The fee payment system is incredibly convenient.",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Teacher",
      company: "Sunrise College",
      content:
        "Grading and assignment management has become so efficient. I save hours every week with MyNexus.",
      rating: 5,
    },
  ];

  const steps = [
    {
      title: "Sign Up",
      description: "Register your institution with basic details",
      icon: UserCheck,
    },
    {
      title: "Customize",
      description: "Configure based on your specific needs",
      icon: Settings,
    },
    {
      title: "Train Users",
      description: "Onboard teachers, parents, and students",
      icon: GraduationCap,
    },
    {
      title: "Go Live",
      description: "Launch the app across your institution",
      icon: Zap,
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  style={{ height: '90px' }}
                  src={require("../../assets/images/nexus_logo.png")}
                  alt="MyNexus Logo"
                  className="h-16 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 transition-colors hover:text-nexusblue"
                >
                  Features
                </a>
                <a
                  href="#modules"
                  className="text-gray-700 transition-colors hover:text-nexusblue"
                >
                  Modules
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 transition-colors hover:text-nexusblue"
                >
                  Testimonials
                </a>
                {/* <a
                  href="#contact"
                  className="text-gray-700 transition-colors hover:text-nexusblue"
                >
                  Contact
                </a> */}
              </div>
            </nav>

            {/* CTA Button */}


            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-nexusblue"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 border-t border-gray-200 px-2 pb-3 pt-2">
                <a
                  href="#features"
                  className="block px-3 py-2 text-gray-700 hover:text-nexusblue"
                >
                  Features
                </a>
                <a
                  href="#modules"
                  className="block px-3 py-2 text-gray-700 hover:text-nexusblue"
                >
                  Modules
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-gray-700 hover:text-nexusblue"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-nexusblue"
                >
                  Contact
                </a>
                <div className="px-3 py-2">
                  <Button className="w-full bg-nexusblue text-white hover:bg-nexusblue">
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with App Launch Announcement */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nexusblue to-purple-600 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* App Launch Badge */}
            <div className="mb-6 inline-flex animate-pulse items-center rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
              <span className="mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span className="font-semibold">Coming Soon: MyNexus Mobile App</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Revolutionizing Education Management with{" "}
                <span className="text-yellow-300">MyNexus</span>
              </h1>
            </motion.div>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-blue-100">
              The all-in-one ERP solution for schools and colleges. Streamline operations, enhance communication, and transform educational experiences.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="outlined"
                sx={{
                  color: "#f5f5f5",
                  border: "2px solid #f5f5f5",
                  borderRadius: "12px",
                  fontWeight: 600,
                  textTransform: "none",
                  transition: "all 0.3s ease-in-out",
                  animation: "wiggle 0.5s infinite  ease-in-out",
                  "&:hover": {
                    border: "2px solid #f2f2f2ff",
                    // apply wiggle animation
                  },
                  "@keyframes wiggle": {
                    "0%": { transform: "rotate(0deg)" },
                    "25%": { transform: "rotate(3deg)" },
                    "50%": { transform: "rotate(-3deg)" },
                    "75%": { transform: "rotate(3deg)" },
                    "100%": { transform: "rotate(0deg)" },
                  },
                }}
              >
                Get Started
              </Button>

            </div>
          </div>

          {/* App Preview */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-white/20 backdrop-blur"></div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ccde56c4-00b0-42a9-a5c5-bbfb82fbaa5a.png"
                alt="MyNexus mobile app dashboard showing student information, attendance, and grades on a modern smartphone interface"
                className="relative mx-auto w-full max-w-sm rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Modules Section */}
      <section id="modules" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Comprehensive Modules for Every User
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Tailored experiences for parents, teachers, and students with specialized features for each group
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center p-6">
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${module.color}`}>
                      <module.icon className="h-8 w-8" />
                    </div>
                    <Typography variant="h6" component="h3" className="text-3xl font-bold text-gray-900">
                      {module.title}
                    </Typography>
                  </div>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Powerful Features for Modern Education
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Everything you need to manage educational institutions efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Card className="h-full border-gray-200 text-center transition-all hover:shadow-lg">
                  <div className="text-center p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <feature.icon className="h-6 w-6 text-nexusblue" />
                    </div>
                    <Typography variant="h6" component="h3" className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </Typography>
                  </div>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" className="leading-relaxed text-gray-600">
                      {feature.description}
                    </Typography >
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-black text-gray-900 sm:text-4xl">
                Why Educational Institutions Choose MyNexus
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Our specialized ERP solution delivers tangible benefits that transform how educational institutions operate.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Zap className="h-4 w-4 text-nexusblue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Increase Operational Efficiency</h3>
                    <p className="text-gray-600">Automate administrative tasks to save time and reduce errors.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Enhanced Parent Engagement</h3>
                    <p className="text-gray-600">Keep parents informed and involved in their child's education journey.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <Shield className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Data Security & Privacy</h3>
                    <p className="text-gray-600">Protect sensitive student and institutional data with enterprise-grade security.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-white/50 backdrop-blur"></div>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aea976f6-3af5-446c-bedc-82005067631a.png"
                  alt="Teacher and students using tablets with the MyNexus app in a modern classroom environment"
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Simple Implementation Process
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Get started with MyNexus in four easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="absolute left-1/2 top-0 -ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-nexusblue text-white">
                  {index + 1}
                </div>
                <Card className="pt-8 border-0 shadow-md">
                  <div className="text-center p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <step.icon className="h-6 w-6 text-nexusblue" />
                    </div>
                    <Typography variant="h6" component="h3" className="text-xl font-bold text-gray-900">
                      {step.title}
                    </Typography>
                  </div>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" className="text-gray-600">
                      {step.description}
                    </Typography >
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Trusted by Educational Institutions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              See what our users have to say about their experience with MyNexus
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: index * 0.30 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Card className="h-full border-gray-200">
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="mb-4 leading-relaxed text-gray-700">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* ✅ Slider Container */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            {/* ✅ Show 6 slides in one row */}
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * (100 / 6)}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  width: `${(testimonialsSlide.length / 6) * 100}%`,
                }}
              >
                {/* {testimonialsSlide.map((testimonial, index) => (
      <motion.div
  key={index}
  className="w-1/4 flex-shrink-0 px-3"
>
  <Card className="h-full border-gray-200 shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500">
    <CardContent className="p-0">
      <motion.img
        src={testimonial.image}
        alt={testimonial.name}
        className="h-72 w-full object-cover rounded-xl"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />
    </CardContent>
  </Card>
</motion.div>

        ))} */}
                {testimonialsSlide.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3 mb-4"
                  >
                    <Card className="h-full border-gray-200 shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500">
                      <CardContent className="p-0">
                        <motion.img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-72 w-full object-cover rounded-xl"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

              </motion.div>

              {/* ✅ Optional Arrows */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) => (prev - 1 + testimonialsSlide.length) % testimonialsSlide.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/60 p-2 text-white hover:bg-gray-800"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % testimonialsSlide.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/60 p-2 text-white hover:bg-gray-800"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="flex justify-center items-center py-10 px-4 bg-gray-50">
          <form
            onSubmit={handleSubmitss}
            className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              Contact Us <br />

            </h2>
              <span className="text-sm text-gray-500">
              E-Mail:- support@mynexus.co.in<br />
              Phone Number:- +91 6394051689<br/>
            </span>
            <span className="text-sm text-gray-500">Have questions or need more information? Fill out the form below to get in touch with our team.</span>
          
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-nexusblue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
              Ready to Transform Your Institution?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Join the waitlist for our upcoming mobile app launch and be among the first to experience the future of educational management.
            </p>

            <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
              {/* <TextField
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-gray-300 bg-white"
              /> */}
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-2xl 
    transition-all duration-300 ease-in-out
    ${isSubmitting
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-gray-900 shadow-md hover:shadow-xl hover:scale-105"
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2" style={{ color: "white" }}>
                    <svg
                      className="w-5 h-5 animate-spin text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2" style={{ color: "white" }}>
                    Coming Soon
                    {/* Optional Arrow */}
                    {/* <ArrowRight className="ml-1 h-5 w-5 text-gray-700" /> */}
                  </span>
                )}
              </Button>

            </div>

            {submitMessage && (
              <p className="mt-4 text-sm text-green-300">{submitMessage}</p>
            )}

            <p className="mt-4 text-sm text-blue-200">
              Be the first to know when we launch • Exclusive early access • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            {/* <div className="col-span-1 md:col-span-2">
              <img 
                src={require("../../assets/images/nexus_logo.png")} 
                alt="MyNexus Logo" 
                className="h-20 w-auto"
                />
              <p className="mb-4 max-w-md text-gray-600">
                The modern educational ERP solution that connects institutions, teachers, students, and parents in one seamless platform.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-nexusblue"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-nexusblue"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-nexusblue"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div> */}


          </div>

          <div className=" flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row">
            <p className="text-sm text-gray-600">
              © 2025 MyNexus. All rights reserved | Designed & Developed by Botscoder.
            </p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <a
                href="#"
                className="text-sm text-gray-600 transition-colors hover:text-nexusblue"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 transition-colors hover:text-nexusblue"
              >
                Terms & Condition
              </a>
              {/* <a
                href="#"
                className="text-sm text-gray-600 transition-colors hover:text-nexusblue"
              >
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Settings icon component
function Settings(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
