<template>
    <div class="department-page">
        <header class="header">
            <img src="https://www.ahnu.edu.cn/ahsf2023/images/logo.png" alt="Hospital Logo" class="logo"/>
            <nav class="nav-menu" style="color:white;">
                <button style="color:white;">General Surgery</button>
                <button style="color:white;">Cardiology</button>
                <!-- Add other departments here -->
            </nav>
            <div class="user-profile">
                <img style="height: 70px" src="data:image/png;base64,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" alt="User Profile" />
                <span>小明</span>
            </div>
        </header>


        <main class="main-content">
            <aside class="sidebar">
                <ul class="department-list">
                    <li v-for="department in departments" :key="department.id">
                        {{ department.name }}
                    </li>
                </ul>
            </aside>
            <div class="circle-diagram-container">
                <svg width="600" height="600" viewBox="0 0 600 600">
                    <defs>
                        <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                            <stop offset="100%" style="stop-color:rgb(230,230,230);stop-opacity:1" />
                        </radialGradient>
                    </defs>
                    <circle cx="300" cy="300" r="200" fill="url(#circleGradient)" stroke="#bbb" stroke-width="2" />
                    <g v-for="(node, index) in nodes" :key="index" class="node" :class="{'active': node.active}">
                        <circle
                                :cx="300 + 200 * Math.cos(2 * Math.PI * index / nodes.length)"
                                :cy="300 + 200 * Math.sin(2 * Math.PI * index / nodes.length)"
                                r="20"
                                @click="toggleNode(index)"
                        />
                    </g>
                </svg>
                <div v-if="isModalOpen" class="modal-overlay" @click.self="isModalOpen = false">
                    <div class="modal">
                        <h2 class="modal-title">请您对此次接诊医生XXX打分</h2>
                        <form @submit.prevent="submitForm">
                            <div class="radio-group" v-for="(option, index) in options" :key="index">
                                <input type="radio" :id="'option' + index" :value="option" v-model="selectedOption" />
                                <label :for="'option' + index">{{ option.label }}</label>
                            </div>
                            <div class="modal-actions">
                                <button type="submit" class="submit-button">提交</button>
                                <button type="button" class="cancel-button" @click="isModalOpen = false">取消</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            departments: [
                { id: 1, name: 'General Surgery' },
                { id: 2, name: 'Cardiology' },
                { id: 3, name: 'Neurology' },
                // ... other departments
            ],
            isModalOpen: false,

            nodes: [
                { active: false },
                { active: false },
                { active: true },
                { active: false },
                { active: false },
                { active: false },
                { active: false },
                { active: false },
                { active: true },
                { active: false },
                { active: true },
                { active: false },
            ],

            options: [
                { label: '1分', value: '1' },
                { label: '2分', value: '2' },
                { label: '3分', value: '3' },
                { label: '4分', value: '4' },
                { label: '5分', value: '5' },
            ],
            selectedOption: ''
        };


    },

    methods: {
        toggleNode(index) {
            if (this.nodes[index].active == false) {
                this.isModalOpen = true
                this.nodes[index].active = true
            } else {
                alert(`下一个节点未响应，将直接提交`);
                this.nodes[index].active = true
            }
        },

        submitForm() {
            alert(`You have selected: ${this.selectedOption}`);
            this.isModalOpen = false;
        },
    }
};
</script>

<style scoped>
.department-page {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color:white;
    background-color: #34495e;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.logo {
    height: 50px;
}
.nav-menu button {
    background: none;
    border: none;
    margin: 0 1rem;
    font-size: 1rem;
    cursor: pointer;
}
.user-profile {
    display: flex;
    align-items: center;
}
.user-profile img {
    border-radius: 50%;
    margin-right: 0.5rem;
}
.main-content {
    display: flex;
    /*justify-content: space-around;*/
    /*padding: 2rem;*/
}
.doctor-stats {
    padding: 300px 150px;
    display: flex;
    flex-direction: column;
}
.doctor-stats h3 {
    font-size: 1.2rem;
}
.doctor-stats span {
    font-size: 2rem;
    font-weight: bold;
}



.sidebar {
    width: 200px;
    background-color: #2c3e50;
    color: white;
    /*padding: 20px;*/
    height: 100vh; /* Full height */
}
.department-list {
    list-style: none;
    padding: 15px;
    margin: 0;
}
.department-list li {
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px;
    border-left: 3px solid transparent;
    transition: border-color 0.3s, padding-left 0.3s;
}
.department-list li:hover {
    border-left: 3px solid #3498db;
    padding-left: 5px;
}



.modal-content h3 {
    margin-top: 0;
}
.modal-content button {
    margin-top: 10px;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.modal-content button:first-child {
    background-color: #7f8c8d;
    color: white;
}
.modal-content button:last-child {
    background-color: #3498db;
    color: white;
    margin-left: 10px;
}

.form-container {
    max-width: 750px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background: #f9f9f9;
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.input-group label {
    font-weight: bold;
    margin-bottom: 5px;
}

.input-group input {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
}
.circle-diagram-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f4f6;
    padding: 60px 340px;
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.node circle {
    fill: #ecf0f1;
    stroke: #7f8c8d;
    stroke-width: 2;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.node circle:hover {
    stroke-width: 4;
    stroke: #95a5a6;
}

.node.active circle {
    fill: #3498db;
    stroke: #2980b9;
    stroke-width: 3;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-title {
    text-align: center;
    margin-bottom: 20px;
}

.radio-group {
    margin-bottom: 10px;
}

.radio-group input {
    margin-right: 10px;
}

.modal-actions {
    text-align: right;
}

.submit-button, .cancel-button {
    padding: 5px 15px;
    margin-top: 20px;
    margin-left: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    color: white;
}

.submit-button {
    background-color: #3498db;
}

.cancel-button {
    background-color: #95a5a6;
}


</style>
