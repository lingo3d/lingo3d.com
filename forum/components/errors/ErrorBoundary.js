import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)

      this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
      return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
      console.log({ error, errorInfo })
    }
    render() {
      if (this.state.hasError) {
        return (
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <h2 className="textColor2 text-center text-4xl">Something went wrong</h2>
        
            <h2 className="textColor2 text-center text-2xl mt-[20px]">Please try again or report the issue to support</h2>
          </div>
        )
      }
  
      return this.props.children
    }
  }
  
  export default ErrorBoundary