import { ChartNode, NodeId, NodeInputDefinition, PortId, NodeOutputDefinition } from '../NodeBase.js';
import { nanoid } from 'nanoid';
import { EditorDefinition, NodeBodySpec, NodeImpl, nodeDefinition } from '../NodeImpl.js';
import { DataValue } from '../DataValue.js';

export type CommentNode = ChartNode<'comment', CommentNodeData>;

export type CommentNodeData = {
  text: string;
  color?: string;
  backgroundColor?: string;
  height: number;
};

export class CommentNodeImpl extends NodeImpl<CommentNode> {
  static create(text: string = ''): CommentNode {
    const chartNode: CommentNode = {
      type: 'comment',
      title: 'Comment',
      id: nanoid() as NodeId,
      visualData: {
        x: 0,
        y: 0,
        width: 600,
      },
      data: {
        text,
        height: 600,
        color: 'rgba(255,255,255,1)',
        backgroundColor: 'rgba(0,0,0,0.05)',
      },
    };

    return chartNode;
  }

  getInputDefinitions(): NodeInputDefinition[] {
    return [];
  }

  getOutputDefinitions(): NodeOutputDefinition[] {
    return [];
  }

  getEditors(): EditorDefinition<CommentNode>[] {
    return [
      {
        type: 'color',
        label: 'Color',
        dataKey: 'color',
      },
      {
        type: 'color',
        label: 'Background Color',
        dataKey: 'backgroundColor',
      },
      {
        type: 'code',
        label: 'Text',
        dataKey: 'text',
        language: 'markdown',
        theme: 'vs-dark',
      },
    ];
  }

  async process(): Promise<Record<string, DataValue>> {
    return {};
  }
}

export const commentNode = nodeDefinition(CommentNodeImpl, 'Comment');
