import React from 'react';
import ExtensionModal from '../components/Extensions/ExtensionModal';
import RecordModal from '../components/Recorder/RecordModal';
import Controls from '../components/Recorder/Controls';
import MediaRecorder from '../components/Recorder/MediaRecorder';

const ScreenRecoder = () => {
	return (
		<main
			className='flex gap-4 '
			style={{
				width: '1500px',
			}}>
			{/* <ExtensionModal /> */}
			{/* <RecordModal /> */}
			<MediaRecorder />
			<Controls />
		</main>
	);
};

export default ScreenRecoder;
