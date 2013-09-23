function swim(element, id_left, id_right) {
			var that = element;
			
			var $face_left = that.add('#' + id_left);
			var $face_right = that.add('#' + id_right);
			
			var pos_top = Math.random() * 1000;
			var pos_left = Math.random() * 1000;
			
			/* Left Face */			
			if (that.position().left > pos_left) {			
			$face_right.hide();
			$face_left.show().addClass('#' + id_left);
			}
			
			/* Right Face */
			if (that.position().left < pos_left) {		
			$face_left.hide();
			$face_right.show().addClass('#' + id_right);
			}
			
			/* Moves element */
			that.stop().animate({
					top:  pos_top + 'px',
					left: pos_left + 'px'
				}, 3000, function() {
					setTimeout(function(){
						swim(element, id_left, id_right);
                }, 0);
			});
	}