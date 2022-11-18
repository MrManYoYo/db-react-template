import React from 'react';

export interface ErrorBoundaryApi {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null
  errorInfo: React.ErrorInfo | null;
}

export default class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor (props: any) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  // static getDerivedStateFromError (error: Error) {
  //   return { error }
  // }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo })
  }

  renderError () {
    const { error, errorInfo } = this.state
    return (
      <div>
        <h3>页面加载失败</h3>
        {error && <div>{error.toString()}</div>}
        {errorInfo && <div>{errorInfo.componentStack}</div>}
      </div>
    )
  }

  render () {
    const { error } = this.state
    if (error) {
      return this.renderError()
    }
    return this.props.children
  }
}
