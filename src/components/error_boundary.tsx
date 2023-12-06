import React, { Component, PropsWithChildren } from 'react'

type Props = {}

type State = {
    hasError: boolean
}

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI

        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("error boundary", error.message);
    }

    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Try again?
                    </button>
                </div>
            )
        }
        return this.props.children;
    }

}

export default ErrorBoundary