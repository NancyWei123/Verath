import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false, 
  loading = false,
  className = '' 
}) => {
  const base = "flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 disabled:opacity-50";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_16px_rgba(139,92,246,0.22)] hover:-translate-y-0.5",
    secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:-translate-y-0.5",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {loading ? 'Processing...' : children}
    </motion.button>
  );
};

export default Button;