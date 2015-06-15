# jquery.easyaudioeffects.js

## Demo

Demo is <a href="http://rm-labo.com/labo/easyaudioeffects/" target="_blank">here</a>.

## About

easyAudioEffects.js easyAudioEffects.js is jquery plug-in. This can be given a very easy sound effects for any of the elements on your WEB site.

## Usage

###Basic Usage

Include necessary JS files

    <script src="jquery.js"></script> //v1.7.0〜
    <script src="jquery.easyAudioEffects.js"></script>
    
Set audio files (Both *.ogg and *.mp3 are required)

    $('.selector').easyAudioEffects({
       ogg : "/path/to/sound.ogg",
       mp3 : "/path/to/sound.mp3"
    });
    
###Available Options


<table>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Type</th>
         <th>Default value</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th>ogg</th>
         <td>string</td>
         <td><span>none</span></td>
         <td>
            Specify the file path <strong>Required</strong>
         </td>
      </tr>
      <tr>
         <th>mp3</th>
         <td>string</td>
         <td><span>none</span></td>
         <td>
            Specify the file path <strong>Required</strong>
         </td>
      </tr>
      <tr>
         <th>eventType</th>
         <td>string</td>
         <td>"hover"</td>
         <td>
            Could be
            <strong>"hover"</strong>
            or
            <strong>"click"</strong>
         </td>
      </tr>
      <tr>
         <th>playType</th>
         <td>string</td>
         <td>"oneShotPolyphonic"</td>
         <td>
            Could be
            <strong>"oneShotPolyphonic"</strong> ,
            <strong>"oneShotMonophonic"</strong> ,
            <strong>"gate"</strong>
            or
            <strong>"loop"</strong>
         </td>
      </tr>
   </tbody>
</table>


## Examples

### eventType :

    $('.selector').easyAudioEffects({
       ogg : "./path/to/sound.ogg",
       mp3 : "./path/to/sound.mp3",
       eventType : "hover" // or "click"
    });
    
### playType :

#### playType : "oneShotPolyphonic"

    $('.selector').easyAudioEffects({
       ogg : "./path/to/sound.ogg",
       mp3 : "./path/to/sound.mp3",
       eventType : "hover", // or "click"
       playType : "oneShotPolyphonic"
    });

#### playType : "oneShotMonophonic"

    $('.selector').easyAudioEffects({
       ogg : "./path/to/sound.ogg",
       mp3 : "./path/to/sound.mp3",
       eventType : "hover", // or "click"
       playType : "oneShotMonophonic"
    });
    
#### playType : "gate"

    $('.selector').easyAudioEffects({
       ogg : "./path/to/sound.ogg",
       mp3 : "./path/to/sound.mp3",
       eventType : "hover", // or "click"
       playType : "gate"
    });

#### playType : "loop"

    $('.selector').easyAudioEffects({
       ogg : "./path/to/sound.ogg",
       mp3 : "./path/to/sound.mp3",
       eventType : "hover", // or "click"
       playType : "loop"
    });

