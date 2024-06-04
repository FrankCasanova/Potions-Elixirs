import { useEffect } from "react";
import playBackgroud from "/backgroundSound.mp3";
import playAncor from "/clickAncor.mp3";
import playButton from "/clickButton.mp3";
import playHoverAncor from "/hoverAncor.mp3";
import playHoverButton from "/hoverButton.mp3";

export function hoverButton() {
    useEffect(() => {
        const buttonHover = (event) => {
          const audio = new Audio(playHoverButton);
          audio.volume = 0.5;
          audio.play();
        };
    
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.addEventListener('mouseover', buttonHover));
    
        // Cleanup function to remove event listeners when component unmounts
        return () => {
          buttons.forEach(button => button.removeEventListener('mouseover', buttonHover));
        };
      }, []);
}

export function hoverAncor() {
    useEffect(() => {
        const buttonHover = (event) => {
          const audio = new Audio(playHoverAncor);
          audio.play();
        };
    
        const buttons = document.querySelectorAll('a');
        buttons.forEach(button => button.addEventListener('mouseover', buttonHover));
    
        // Cleanup function to remove event listeners when component unmounts
        return () => {
          buttons.forEach(button => button.removeEventListener('mouseover', buttonHover));
        };
      }, []);
}

export function clickMenu() {
    useEffect(() => {
        const menuClick = (event) => {
          const audio = new Audio(playAncor);
        //   audio.volume = 0.5;
          audio.play();
        };
    
        const menus = document.querySelectorAll('a');
        menus.forEach(menu => menu.addEventListener('click', menuClick));
    
        // Cleanup function to remove event listeners when component unmounts
        return () => {
          menus.forEach(menu => menu.removeEventListener('click', menuClick));
        };
      }, []);
}

export function clickButton() {
    useEffect(() => {
        const buttonClick = (event) => {
          const audio = new Audio(playButton);
        //   audio.volume = 0.5;
          audio.play();
        };
    
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.addEventListener('click', buttonClick));
    
        // Cleanup function to remove event listeners when component unmounts
        return () => {
          buttons.forEach(button => button.removeEventListener('click', buttonClick));
        };
      }, []);
}

export function playBackGroundMusic() {
    useEffect(() => {
        const backgroundMusic = new Audio(playBackgroud);
        backgroundMusic.volume = 0.5; // Adjust the volume as needed
        backgroundMusic.loop = false; // Enable looping

        const startBackgroundMusic = () => {
          backgroundMusic.play().catch(error => {
            console.error('Failed to play background music:', error);
          });

          // Remove event listener after first interaction
          document.removeEventListener('click', startBackgroundMusic);
        };

        // Add event listener for user interaction
        document.addEventListener('click', startBackgroundMusic);  

        // Cleanup on component unmount
        return () => {
          backgroundMusic.pause();
          backgroundMusic.currentTime = 0;
          document.removeEventListener('click', startBackgroundMusic);
        };
      }, []);
}