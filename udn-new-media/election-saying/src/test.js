/* eslint-disable no-param-reassign */
import {
  TweenLite, Power2, Power4, Back,
} from 'gsap/TweenMax';

export default {
  computed: {
    triggerDropMatchRange(vm) {
      // const droppedHeadWidth = vm.$refs.droppedHead.offsetWidth;
      // const droppedHeadHeight = vm.$refs.droppedHead.offsetHeight;
      return {
        top: vm.droppedHeadOffsetTop + (vm.$refs.droppedHead.offsetHeight / 2),
        left: vm.droppedHeadOffsetLeft + (vm.$refs.droppedHead.offsetWidth / 2),
        // top: vm.droppedHeadOffsetTop + (droppedHeadHeight / 3),
        // bottom: vm.droppedHeadOffsetTop + (droppedHeadHeight / 3 * 2),
        // left: vm.droppedHeadOffsetLeft + (droppedHeadWidth / 3),
        // right: vm.droppedHeadOffsetLeft + (droppedHeadWidth / 3 * 2),
      };
    },
  },
  methods: {
    setDroppedHeadOffset(vm) {
      const droppedHeadRect = vm.$refs.droppedHead.getBoundingClientRect();
      vm.droppedHeadOffsetTop = droppedHeadRect.top + vm.windowEle.pageYOffset;
      vm.droppedHeadOffsetLeft = droppedHeadRect.left + vm.windowEle.pageXOffset;
    },
    resizeHandler(vm) {
      if (vm.resizeTimer) {
        clearTimeout(vm.resizeTimer);
      }
      vm.resizeTimer = setTimeout(() => {
        vm.setDroppedHeadOffset();
      }, 600);
    },
    slideInDynamic(vm) {
      vm.setDroppedHeadOffset();
      window.addEventListener('resize', vm.resizeHandler);
      TweenLite.to(`#candidate1--${vm.test.id}`, 0.4, {
        x: 0,
        ease: Back.easeOut.config(1.4),
      });
      TweenLite.to(`#candidate2--${vm.test.id}`, 0.3, {
        x: 0,
        ease: Back.easeOut.config(1.4),
        delay: 0.1,
      });
      TweenLite.to(`#candidate3--${vm.test.id}`, 0.2, {
        x: 0,
        ease: Back.easeOut.config(1.4),
        delay: 0.2,
      });
      TweenLite.to(`#candidate4--${vm.test.id}`, 0.1, {
        x: 0,
        ease: Back.easeOut.config(1.4),
        delay: 0.3,
        onComplete: () => {
          vm.typeQuotation();
        },
      });
    },
    typeQuotation(vm) {
      TweenLite.set(`#quotation-mark-top--${vm.test.id}, #quotation-mark-bottom--${vm.test.id}`, {
        opacity: 1,
      });
      const quotation = document.getElementById(`quotation--${vm.test.id}`);
      const splitSaying = vm.test.saying.split('');
      let sayingStr = '';
      let idx = 0;
      let delay = 120;
      const typeSaying = () => {
        vm.typeSayingTimer = setTimeout(() => {
          sayingStr += splitSaying[idx];
          quotation.textContent = sayingStr;
          if (idx !== 3) {
            if (idx > 3 && idx < splitSaying.length - 5) {
              delay = 80;
            } else {
              delay = 120;
            }
          } else {
            delay = 200;
          }
          idx += 1;
          if (idx !== splitSaying.length) {
            typeSaying();
          } else {
            clearTimeout(vm.typeSayingTimer);
            TweenLite.to(`#drop-place--${vm.test.id}`, 0.4, {
              opacity: 1,
              ease: Power2.easeIn,
              onComplete: () => {
                vm.canDragHead = true;
              },
            });
          }
        }, delay);
      };
      typeSaying();
    },
    mouseDragStart(evt, vm) {
      vm.draggedHead = evt.target;

      vm.draggedHeadTop = vm.draggedHead.getBoundingClientRect().top + vm.windowEle.pageYOffset;
      vm.draggedHeadLeft = vm.draggedHead.getBoundingClientRect().left + vm.windowEle.pageXOffset;

      TweenLite.to(vm.draggedHead, 0.2, {
        scale: 1.2,
        ease: Power4.easeOut,
      });

      vm.mouseX = evt.pageX;
      vm.mouseY = evt.pageY;

      vm.draggedHead.style.zIndex = '99';

      document.addEventListener('mousemove', vm.mouseDragging);
      // can't bind vm event to vm.draggedHead
      document.addEventListener('mouseup', vm.mouseDrop);
    },
    mouseDragging(evt, vm) {
      evt.preventDefault();
      const currentMouseX = evt.pageX;
      const currentMouseY = evt.pageY;
      vm.draggedHeadTotalMoveX += currentMouseX - vm.mouseX;
      vm.draggedHeadTotalMoveY += currentMouseY - vm.mouseY;

      TweenLite.set(vm.draggedHead, {
        x: vm.draggedHeadTotalMoveX,
        y: vm.draggedHeadTotalMoveY,
      });

      vm.checkDraggedHeadInDropRange();

      vm.mouseX = currentMouseX;
      vm.mouseY = currentMouseY;
      // vm.draggedHead.addEventListener('mouseup', vm.mouseDrop);
    },
    mouseDrop(evt, vm) {
      evt.preventDefault();
      vm.headDropped();
      vm.draggedHead.style.zIndex = 'auto';

      document.removeEventListener('mousemove', vm.mouseDragging);
      document.removeEventListener('mouseup', vm.mouseDrop);
    },
    touchDragStart(evt, vm) {
      vm.draggedHead = evt.target;

      vm.draggedHeadTop = vm.draggedHead.getBoundingClientRect().top + vm.windowEle.pageYOffset;
      vm.draggedHeadLeft = vm.draggedHead.getBoundingClientRect().left + vm.windowEle.pageXOffset;

      TweenLite.to(vm.draggedHead, 0.2, {
        scale: 1.2,
        ease: Power4.easeOut,
      });

      vm.touchX = evt.touches[0].pageX;
      vm.touchY = evt.touches[0].pageY;

      vm.draggedHead.style.zIndex = '99';

      vm.draggedHead.addEventListener('touchmove', vm.touchDragging);
      vm.draggedHead.addEventListener('touchend', vm.touchDrop);
    },
    touchDragging(evt, vm) {
      evt.preventDefault();
      const currentTouchX = evt.changedTouches[0].pageX;
      const currentTouchY = evt.changedTouches[0].pageY;
      vm.draggedHeadTotalMoveX += currentTouchX - vm.touchX;
      vm.draggedHeadTotalMoveY += currentTouchY - vm.touchY;

      TweenLite.set(vm.draggedHead, {
        x: vm.draggedHeadTotalMoveX,
        y: vm.draggedHeadTotalMoveY,
      });

      vm.checkDraggedHeadInDropRange();

      vm.touchX = currentTouchX;
      vm.touchY = currentTouchY;

      // vm.draggedHead.addEventListener('touchend', vm.touchDrop);
    },
    touchDrop(evt, vm) {
      evt.preventDefault();
      vm.headDropped();

      vm.draggedHead.removeEventListener('touchmove', vm.touchDragging);
      vm.draggedHead.removeEventListener('touchend', vm.touchDrop);
    },
    headDropped(vm) {
      if (vm.isDraggedHeadMatchDrop) {
        TweenLite.to(vm.draggedHead, 0.2, {
          x: vm.droppedHeadOffsetLeft - vm.draggedHeadLeft,
          y: vm.droppedHeadOffsetTop - vm.draggedHeadTop,
          scale: 1,
          ease: Power4.easeOut,
        });
        vm.canDragHead = false;

        const candidates = vm.draggedHead.parentNode.parentNode.children;
        const draggedHeadParent = vm.draggedHead.parentNode;
        const newCandidates = [];
        for (let i = 0; i < candidates.length; i += 1) {
          if (candidates[i] !== draggedHeadParent) {
            newCandidates.push(candidates[i]);
          }
        }
        newCandidates.forEach((candidate) => {
          candidate.classList.add('check-answer-hide');
        });

        TweenLite.to(vm.draggedHead.nextElementSibling, 0.8, {
          opacity: 0,
          ease: Power2.easeInOut,
        });
        TweenLite.to('.check-answer-hide', 0.8, {
          opacity: 0,
          ease: Power2.easeInOut,
          onComplete: () => {
            vm.checkAnswerDynamic();
          },
        });
      } else {
        TweenLite.to(vm.draggedHead, 0.2, {
          x: 0,
          y: 0,
          scale: 1,
          ease: Power4.easeOut,
        });
      }

      vm.draggedHead.style.zIndex = 'auto';
      vm.draggedHeadTotalMoveX = 0;
      vm.draggedHeadTotalMoveY = 0;
    },
    checkAnswerDynamic(vm) {
      // correct
      if (vm.draggedHead.dataset.name === vm.test.answerName) {
        TweenLite.to(`#correct-stroke--${vm.test.id}`, 0.8, {
          strokeDashoffset: 0,
          ease: Power2.easeInOut,
        });
        TweenLite.to(`#tick--${vm.test.id}`, 0.8, {
          strokeDashoffset: 0,
          ease: Power2.easeInOut,
          delay: 0.8,
          onComplete: () => {
            vm.switchQuestionToAnswer();
          },
        });
        // incorrect
      } else {
        TweenLite.to(`#incorrect-stroke--${vm.test.id}`, 0.8, {
          strokeDashoffset: 0,
          ease: Power2.easeInOut,
        });
        TweenLite.to(`#cross-left--${vm.test.id}`, 0.4, {
          strokeDashoffset: 0,
          ease: Power2.easeInOut,
          delay: 0.8,
        });
        TweenLite.to(`#cross-right--${vm.test.id}`, 0.4, {
          strokeDashoffset: 0,
          ease: Power2.easeInOut,
          delay: 1.2,
          onComplete: () => {
            vm.switchQuestionToAnswer();
          },
        });
      }
    },
    switchQuestionToAnswer(vm) {
      TweenLite.set(`#answer-head--${vm.test.id}`, {
        opacity: 1,
        delay: 0.5,
      });
      TweenLite.to(`#answer-head--${vm.test.id}`, 0.4, {
        x: '-50%',
        y: -248,
        scale: 2,
        ease: Back.easeOut.config(1),
        delay: 0.5,
        onStart: () => {
          vm.hideForAnswerPop = true;
          vm.draggedHead.style.display = 'none';
          vm.isAnswerShow = true;
        },
      });
      TweenLite.from(`#answer-text--${vm.test.id}`, 0.4, {
        y: 200,
        ease: Back.easeOut.config(1),
        delay: 0.5,
      });
    },
    checkDraggedHeadInDropRange(vm) {
      const draggedHeadRect = vm.draggedHead.getBoundingClientRect();
      const scrollY = vm.windowEle.pageYOffset;
      const scrollX = vm.windowEle.pageXOffset;
      const dropDraggedHeadTop = draggedHeadRect.top + scrollY;
      const dropDraggedHeadBottom = draggedHeadRect.bottom + scrollY;
      const dropDraggedHeadLeft = draggedHeadRect.left + scrollX;
      const dropDraggedHeadRight = draggedHeadRect.right + scrollX;

      if (((dropDraggedHeadTop > vm.droppedHeadOffsetTop && dropDraggedHeadTop < vm.triggerDropMatchRange.top) || (dropDraggedHeadTop < vm.droppedHeadOffsetTop && dropDraggedHeadBottom > vm.triggerDropMatchRange.top))
        && ((dropDraggedHeadLeft < vm.droppedHeadOffsetLeft && dropDraggedHeadRight > vm.triggerDropMatchRange.left) || (dropDraggedHeadLeft > vm.droppedHeadOffsetLeft && dropDraggedHeadLeft < vm.triggerDropMatchRange.left))) {
        TweenLite.to(vm.draggedHead, 0.2, {
          scale: 1,
          ease: Power4.easeOut,
        });
        vm.isDraggedHeadMatchDrop = true;
      } else {
        TweenLite.to(vm.draggedHead, 0.2, {
          scale: 1.2,
          ease: Power4.easeOut,
        });
        vm.isDraggedHeadMatchDrop = false;
      }
    },
  },
};
/* eslint-enable no-param-reassign */
