import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // Background must be transparent to show your Slidev gradient
      background: 'transparent',
      
      // Node styling: Semi-transparent white to pop against the blue
      primaryColor: 'rgba(78, 197, 212, 0.2)',
      primaryTextColor: '#0a4a63',     // Dark blue extracted from your gradient for legibility
      primaryBorderColor: '#ffffff',
      
      // Flowchart Lines: Bright cyan to match your #4EC5D4 highlight
      lineColor: '#4EC5D4',
      edgeLabelBackground: 'rgba(255, 255, 255, 0.8)', // Subtle halo for "SensorData" labels
      
      // Secondary elements
      nodeBorder: '#0a4a63',
      nodeTextColor: '#0a4a63',
      
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      fontSize: '16px'
    }
  }
})
