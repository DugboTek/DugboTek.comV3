import { FlowChart } from '../components/ui/flowchart';
import { PaperAirplaneIcon } from '../components/ui/icons/PaperAirplane';
import ChatGPTLogo from '../assets/providers/chatgpt.png';
import EmailIcon from '../images/email.png';

const FlowChartDesigner = () => {
  // Flow chart configuration
  const flowChartConfig = {
    grid: { width: 1100, height: 400 },
    cards: [
      // Faded top email card
      {
        id: 'email-fade-top',
        position: { x: 50, y: -40, width: 350, height: 60 },
        content: {
          left: { 
            type: "text" as const, 
            value: <PaperAirplaneIcon className="w-6 h-6 text-blue-500/50" />,
            style: { padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' } 
          },
          center: { 
            type: "text" as const, 
            value: 'alex.brown@outlook.com', 
            style: { fontSize: '14px', color: '#4A5568', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5, whiteSpace: 'nowrap' } 
          },
          right: { 
            type: "text" as const, 
            value: 'New Signup', 
            style: { fontSize: '14px', color: '#38a169', fontWeight: 'bold', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5, whiteSpace: 'nowrap' } 
          }
        }
      },
      // Regular email cards
      {
        id: 'email-1',
        position: { x: 50, y: 40, width: 350, height: 60 },
        content: {
          left: { 
            type: "text" as const, 
            value: <PaperAirplaneIcon className="w-6 h-6 text-blue-500" />,
            style: { padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' } 
          },
          center: { 
            type: "text" as const, 
            value: 'john.smith@gmail.com', 
            style: { fontSize: '14px', color: '#4A5568', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' } 
          },
          right: { 
            type: "text" as const, 
            value: 'New Signup', 
            style: { fontSize: '14px', color: '#38a169', fontWeight: 'bold', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' } 
          }
        }
      },
      {
        id: 'email-2',
        position: { x: 50, y: 120, width: 350, height: 60 },
        content: {
          left: { 
            type: "text" as const, 
            value: <PaperAirplaneIcon className="w-6 h-6 text-blue-500" />,
            style: { padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' } 
          },
          center: { 
            type: "text" as const, 
            value: 'sarah.jones@yahoo.com', 
            style: { fontSize: '14px', color: '#4A5568', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' } 
          },
          right: { 
            type: "text" as const, 
            value: 'New Signup', 
            style: { fontSize: '14px', color: '#38a169', fontWeight: 'bold', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' } 
          }
        }
      },
      {
        id: 'email-3',
        position: { x: 50, y: 200, width: 350, height: 60 },
        content: {
          left: { 
            type: "text" as const, 
            value: <PaperAirplaneIcon className="w-6 h-6 text-blue-500" />,
            style: { padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' } 
          },
          center: { 
            type: "text" as const, 
            value: 'mike.wilson@outlook.com', 
            style: { fontSize: '14px', color: '#4A5568', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' } 
          },
          right: { 
            type: "text" as const, 
            value: 'New Signup', 
            style: { fontSize: '14px', color: '#38a169', fontWeight: 'bold', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' } 
          }
        }
      },
      // Faded bottom email card
      {
        id: 'email-fade-bottom',
        position: { x: 50, y: 280, width: 350, height: 60 },
        content: {
          left: { 
            type: "text" as const, 
            value: <PaperAirplaneIcon className="w-6 h-6 text-blue-500/50" />,
            style: { padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' } 
          },
          center: { 
            type: "text" as const, 
            value: 'emma.davis@gmail.com', 
            style: { fontSize: '14px', color: '#4A5568', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5, whiteSpace: 'nowrap' } 
          },
          right: { 
            type: "text" as const, 
            value: 'New Signup', 
            style: { fontSize: '14px', color: '#38a169', fontWeight: 'bold', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5, whiteSpace: 'nowrap' } 
          }
        }
      },
      // ChatGPT processing card
      {
        id: 'chatgpt',
        position: { x: 550, y: 100, width: 200, height: 100 },
        content: {
          left: { type: "text" as const, value: "", style: { width: '20px' } },
          center: { 
            type: "text" as const, 
            value: <div className="flex flex-col items-center justify-between h-full py-3">
              <img src={ChatGPTLogo} alt="ChatGPT Logo" className="w-12 h-12" />
              <span className="text-sm font-medium text-gray-700">Personalized Message</span>
            </div>, 
            style: { 
              height: '100%',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '0'
            } 
          },
          right: { type: "text" as const, value: "", style: { width: '20px' } }
        }
      },
      // Output email card
      {
        id: 'output-email',
        position: { x: 900, y: 100, width: 200, height: 100 },
        content: {
          left: { type: "text" as const, value: "", style: { width: '20px' } },
          center: { 
            type: "text" as const, 
            value: <div className="flex flex-col items-center justify-between h-full py-3">
              <img src={EmailIcon} alt="Email Icon" className="w-12 h-12" />
              <span className="text-sm font-medium text-gray-700">Automated Email</span>
            </div>, 
            style: { 
              height: '100%',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '0'
            } 
          },
          right: { type: "text" as const, value: "", style: { width: '20px' } }
        }
      }
    ],
    connections: [
      // Faded connections
      { from: { cardId: 'email-fade-top', side: "right" as const }, to: { cardId: 'chatgpt', side: "left" as const }, lineType: "solid" as const },
      { from: { cardId: 'email-fade-bottom', side: "right" as const }, to: { cardId: 'chatgpt', side: "left" as const }, lineType: "solid" as const },
      // Regular connections
      { from: { cardId: 'email-1', side: "right" as const }, to: { cardId: 'chatgpt', side: "left" as const }, lineType: "solid" as const },
      { from: { cardId: 'email-2', side: "right" as const }, to: { cardId: 'chatgpt', side: "left" as const }, lineType: "solid" as const },
      { from: { cardId: 'email-3', side: "right" as const }, to: { cardId: 'chatgpt', side: "left" as const }, lineType: "solid" as const },
      // Output connection
      { from: { cardId: 'chatgpt', side: "right" as const }, to: { cardId: 'output-email', side: "left" as const }, lineType: "solid" as const }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 mx-auto" style={{ width: '1400px', height: '600px' }}>
        <FlowChart 
          config={flowChartConfig} 
          scalingOptions={{
            minScale: 1,
            maxScale: 1
          }}
        />
      </div>
    </div>
  );
};

export default FlowChartDesigner; 