import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline, warningOutline } from "ionicons/icons";
import "./Toast.css";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "warning";
  isExiting: boolean;
}

interface ToastContextType {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showWarning: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.map(t => t.id === id ? { ...t, isExiting: true } : t));
    
    // Completely remove after animation completes
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 400);
  }, []);

  const addToast = useCallback((message: string, type: "success" | "error" | "warning") => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: Toast = { id, message, type, isExiting: false };
    
    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, [removeToast]);

  const showSuccess = (message: string) => addToast(message, "success");
  const showError = (message: string) => addToast(message, "error");
  const showWarning = (message: string) => addToast(message, "warning");

  return (
    <ToastContext.Provider value={{ showSuccess, showError, showWarning }}>
      {children}
      <div className="kingdom-toast-container">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`kingdom-toast ${toast.type} ${toast.isExiting ? 'exit' : ''}`}
            onClick={() => removeToast(toast.id)}
          >
            <IonIcon
              icon={
                toast.type === "success"
                  ? checkmarkCircleOutline
                  : toast.type === "error"
                  ? closeCircleOutline
                  : warningOutline
              }
              className="kingdom-toast-icon"
            />
            <div className="kingdom-toast-message">{toast.message}</div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
