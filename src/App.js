import React, { useState } from 'react';
import Soccer from './component/Soccer';

const App = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderComponent = () => {
        switch(selectedComponent) {
            case 'soccer':
                return <Soccer />;
            // 다른 컴포넌트들을 여기에 추가할 수 있습니다.
            default:
                return <h2>컴포넌트를 선택해주세요</h2>;
        }
    };

    return (
        <div className="App">
            <header>
                <h1>AI 축구 스쿼드 </h1>
                <nav>
                    <button onClick={() => setSelectedComponent('soccer')}>
                        축구 스쿼드 짜기
                    </button>
                    {/* 다른 버튼들을 여기에 추가할 수 있습니다 */}
                </nav>
            </header>
            <main>
                {renderComponent()}
            </main>
        </div>
    );
};

export default App;