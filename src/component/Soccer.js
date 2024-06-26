import React, { useEffect, useState } from 'react';
import './Soccer.css';

class SoccerPlayer {
    constructor(name, profile, age, position) {
        this.name = name;
        this.profile = profile;
        this.age = age;
        this.position = position;
    }
}

const Soccer = () => {
    const [players] = useState([
        new SoccerPlayer('홍길동', 'profile1.jpg', 25, 'GK'),
        new SoccerPlayer('김철수', 'profile2.jpg', 27, 'LB'),
        new SoccerPlayer('이영희', 'profile3.jpg', 23, 'LCB'),
        new SoccerPlayer('박지성', 'profile4.jpg', 29, 'RCB'),
        new SoccerPlayer('손흥민', 'profile5.jpg', 28, 'RB'),
        new SoccerPlayer('홍길동1', 'profile1.jpg', 25, 'LM'),
        new SoccerPlayer('김철수2', 'profile2.jpg', 27, 'LCM'),
        new SoccerPlayer('이영희3', 'profile3.jpg', 23, 'RCM'),
        new SoccerPlayer('박지성4', 'profile4.jpg', 29, 'RM'),
        new SoccerPlayer('손흥민5', 'profile5.jpg', 28, 'RS'),
        new SoccerPlayer('손흥민6', 'profile5.jpg', 28, 'LS'),
    ]);

    useEffect(() => {
        populateSquad(players);
    }, [players]);

    
function populateSquad(players) {
    const positionMapping = {
        'GK': ['GK'],
        'DEF': ['RCB', 'LCB', 'RB', 'LB'],
        'MID': ['RM', 'CM', 'LM'],
        'FWD': ['ST']
    };

    const playerElements = document.querySelectorAll('.player');

    players.forEach(player => {
        const positions = positionMapping[player.position];
        if (!positions) return;

        for (let pos of positions) {
            const element = Array.from(playerElements).find(el => el.getAttribute('data-position') === pos && !el.classList.contains('filled'));
            if (element) {
                element.querySelector('.name').textContent = player.name;
                element.querySelector('.age').textContent = player.age;
                element.querySelector('.profile').src = player.profile;
                element.classList.add('filled');
                break;
            }
        }
    });
}

    return (
        <div class="squadmaker-view__field f442">
            <div class="player gk ui-droppable" id="formationPlayer1" data-position="GK">
                <span class="info">
                    <span class="position">GK</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player rcb ui-droppable" id="formationPlayer2" data-position="RCB">
                <span class="info">
                    <span class="position">RCB</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player lcb ui-droppable" id="formationPlayer3" data-position="LCB">
                <span class="info">
                    <span class="position">LCB</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player rb ui-droppable" id="formationPlayer4" data-position="RB">
                <span class="info">
                    <span class="position">RB</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player lb ui-droppable" id="formationPlayer5" data-position="LB">
                <span class="info">
                    <span class="position">LB</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player rm ui-droppable" id="formationPlayer6" data-position="RM">
                <span class="info">
                    <span class="position">RM</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player cm ui-droppable" id="formationPlayer7" data-position="RCM">
                <span class="info">
                    <span class="position">RCM</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player cm ui-droppable" id="formationPlayer8" data-position="LCM">
                <span class="info">
                    <span class="position">LCM</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player lm ui-droppable" id="formationPlayer9" data-position="LM">
                <span class="info">
                    <span class="position">LM</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player st ui-droppable" id="formationPlayer10" data-position="LS">
                <span class="info">
                    <span class="position">LS</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
            <div class="player st ui-droppable" id="formationPlayer11" data-position="RS">
                <span class="info">
                    <span class="position">RS</span>
                    <span class="name"></span>
                    <span class="age"></span>
                </span>
                <img class="profile" src="" alt="" />
            </div>
        </div>
    );
};

export default Soccer;