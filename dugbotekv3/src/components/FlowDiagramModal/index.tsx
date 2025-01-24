import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../../data/caseStudies';
import ReactFlow, { 
  Node, 
  Edge, 
  MarkerType, 
  Background, 
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow
} from 'reactflow';
import 'reactflow/dist/style.css';

interface FlowDiagramModalProps {
  caseStudy: CaseStudy;
  onClose: () => void;
}

const FlowDiagramModal: React.FC<FlowDiagramModalProps> = ({ 
  caseStudy, 
  onClose 
}) => {
  const { fitView } = useReactFlow();

  const initialNodes = caseStudy.nodes.map(node => ({
    id: node.id,
    type: 'default',
    data: { 
      label: node.title, 
      description: node.description,
      type: node.type 
    },
    position: node.position,
    style: {
      ...node.style,
      padding: '15px',
      borderRadius: '8px',
      width: 200,
    }
  }));

  const initialEdges = caseStudy.nodes.flatMap(node =>
    node.connections.map(targetId => ({
      id: `${node.id}-${targetId}`,
      source: node.id,
      target: targetId,
      animated: true,
      style: { stroke: '#94a3b8' },
      markerEnd: { type: MarkerType.ArrowClosed }
    }))
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-white rounded-lg p-6 w-[90vw] h-[80vh] m-4"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">{caseStudy.title}</h2>
              <p className="text-gray-600 mt-1">{caseStudy.challengeDescription}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Time Reduction</p>
              <p className="font-medium">{caseStudy.results.timeReduction}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Cost Savings</p>
              <p className="font-medium">{caseStudy.results.costSavings}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Quality Improvement</p>
              <p className="font-medium">{caseStudy.results.qualityImprovement}</p>
            </div>
          </div>

          <div className="h-[calc(100%-200px)] bg-gray-50 rounded-lg">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              fitView
              className="flow-diagram"
            >
              <Background />
              <Controls />
              <MiniMap 
                nodeColor={n => {
                  const node = caseStudy.nodes.find(cn => cn.id === n.id);
                  return node?.style?.backgroundColor || '#eee';
                }}
              />
            </ReactFlow>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FlowDiagramModal; 