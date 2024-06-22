import React from 'react'
import img from '../components/HomeContent/home_workout.jpg';
import Footer from '../components/Footer';

const Workout = () => {
  return (
    <div className='w-full mt-4'>
        <h1 className='text-3xl md:text-5xl font-bold text-black text-center mt-8 mb-12 px-4'>5 Effective Home Workouts to Stay Fit</h1>
        
        <div className='max-w-[1080px] mx-auto px-4 '>
            <img src={img} alt="" />

            <div className='my-8 px-3'> 
             <p className='text-lg md:text-xl text-black'>Staying fit doesn't require a gym membership or expensive equipment.
              With the right exercises, you can achieve your fitness goals from the comfort of your own home. 
              Here are five effective home workouts to help you stay in shape:
             </p>
             <div className='my-6 text-lg text-black'>
                <h2 className='text-xl font-bold'>1. Bodyweight Exercises</h2>
                <p className='px-2 my-4 '>Bodyweight exercises are a great way to build strength and improve your fitness without any equipment.
                 Here are a few key exercises to include in your routine:
                </p>
                <ol className='my-4 pl-10 list-disc'>
                    <li>
                        <span className='font-semibold'>Push-Ups: </span>
                        Target your chest, shoulders, and triceps. 
                        Start in a plank position, lower your body until your chest nearly touches the floor, and push back up. 
                        Modify by doing them on your knees if needed.
                    </li>
                    <li>
                        <span className='font-semibold'>Squats:</span>
                        Work your legs and glutes. Stand with your feet shoulder-width apart, 
                        lower your body as if sitting in a chair, then stand back up.
                    </li>
                    <li>
                       <span className='font-semibold'>Planks:</span>
                       Strengthen your core. Hold a plank position with your forearms on the ground and 
                       your body in a straight line from head to heels.
                    </li>
                </ol>
                <p className='p-2 font-semibold '>Example Routine:</p>
                <ul className='list-disc pl-10 '>
                    <li>3 sets of 15 push-ups</li>
                    <li>3 sets of 20 squats</li>
                    <li>3 sets of 30-second planks</li>
                </ul>
            </div>

            <div className='text-lg my-6'>
            <h2 className='text-xl font-bold'>2. High-Intensity Interval Training (HIIT)</h2>
                <p className='px-2 my-4 '>HIIT involves short bursts of intense exercise followed by brief periods of rest. This workout is great for burning calories and improving cardiovascular fitness. 
                    Here’s a sample HIIT workout you can try at home:
                </p>
                <ol className='my-4 pl-10 list-disc'>
                    <li>
                        <span className='font-semibold'>Jumping Jacks: </span>30 seconds
                    </li>
                    <li>
                        <span className='font-semibold'>Rest: </span>15 seconds
                    </li>
                    <li>
                        <span className='font-semibold'>Burpees: </span>30 seconds
                    </li>
                    <li>
                        <span className='font-semibold'>Rest: </span>15 seconds
                    </li>
                    <li>
                        <span className='font-semibold'>Mountain Climbers: </span>30 seconds
                    </li>
                    <li>
                        <span className='font-semibold'>Rest: </span>15 seconds
                    </li>
                    <li>
                        <span className='font-semibold'>High Knees: </span>30 seconds
                    </li>
                    <li>
                        <span className='font-semibold'>Rest: </span>15 seconds
                    </li>
                </ol>

                <p>Repeat the circuit 3-4 times for a full workout.</p>

            </div>


            <div className='my-6 text-lg text-black'>
                <h2 className='text-xl font-bold'>3. Yoga</h2>
                <p className='px-2 my-4 '>Yoga is excellent for improving flexibility, strength, and mental well-being. There are many free online resources and apps that offer guided yoga sessions for all levels. 
                    Key poses to include in your practice are:
                </p>
                <ol className='my-4 pl-10 list-disc'>
                    <li>
                        <span className='font-semibold'>Downward Dog: </span>
                        Strengthens and stretches your entire body.
                    </li>
                    <li>
                        <span className='font-semibold'>Warrior II: </span>
                        Builds strength in your legs and core while improving balance.
                    </li>
                    <li>
                       <span className='font-semibold'>Child’s Pose: </span>
                       A relaxing stretch for your back, hips, and shoulders.
                    </li>
                </ol>
                <p className='p-2 font-semibold '>Example Routine:</p>
                <ul className='list-disc pl-10 '>
                    <li>5 minutes of gentle stretching</li>
                    <li>15 minutes of yoga flow incorporating the poses above</li>
                    <li>5 minutes of deep breathing and relaxation</li>
                </ul>
            </div>


            <div className='my-6 text-lg text-black'>
                <h2 className='text-xl font-bold'>4. Resistance Band Workouts</h2>
                <p className='px-2 my-4 '>Resistance bands are inexpensive and versatile tools that can add variety to your workouts. 
                    They’re great for strength training and can be used to target different muscle groups. Here’s a simple routine:
                </p>
                <ol className='my-4 pl-10 list-disc'>
                    <li>
                        <span className='font-semibold'>Banded Squats: </span>
                        Step on the band with feet shoulder-width apart, hold the handles at your shoulders, and perform a squat.
                    </li>
                    <li>
                        <span className='font-semibold'>Bicep Curls: </span>
                        Stand on the band with feet hip-width apart, hold the handles, and curl your arms up.
                    </li>
                    <li>
                       <span className='font-semibold'>Seated Rows: </span>
                       Sit on the floor with your legs extended, wrap the band around your feet, and pull the handles towards you.
                    </li>
                </ol>
                <p className='p-2 font-semibold '>Example Routine:</p>
                <ul className='list-disc pl-10 '>
                    <li>3 sets of 15 banded squats</li>
                    <li>3 sets of 15 bicep curls</li>
                    <li>3 sets of 15 seated rows</li>
                </ul>
            </div>


            <div className='my-6 text-lg text-black'>
                <h2 className='text-xl font-bold'>5. Cardio Workouts</h2>
                <p className='px-2 my-4 '>Cardio exercises are crucial for heart health and overall fitness. You don’t need a treadmill to get your heart rate up. 
                    Here are a few effective cardio exercises you can do at home:
                </p>
                <ol className='my-4 pl-10 list-disc'>
                    <li>
                        <span className='font-semibold'>Jump Rope: </span>
                        If you have a jump rope, it’s a fantastic way to get a quick cardio session. Aim for 5-10 minutes
                    </li>
                    <li>
                        <span className='font-semibold'>Dancing: </span>
                        Put on your favorite music and dance around your living room for a fun and effective workout.
                    </li>
                    <li>
                       <span className='font-semibold'>Stair Climbing: </span>
                       If you have stairs at home, use them for a great cardio workout by walking or running up and down.
                    </li>
                </ol>
                <p className='p-2 font-semibold '>Example Routine:</p>
                <ul className='list-disc pl-10 '>
                    <li>5 minutes of jump rope</li>
                    <li>10 minutes of dancing</li>
                    <li>10 minutes of stair climbing</li>
                </ul>
            </div>
         </div>

         <div className='my-6 px-2'>
            <p className='font-bold text-2xl py-2'>Conclusion</p>
            <p className='text-lg'>Staying fit at home is not only possible but also convenient and cost-effective. 
                By incorporating these five effective workouts into your routine, you can maintain your fitness and health without leaving your house. 
                Remember to start at your own pace and gradually increase the intensity as you get stronger. 
                Stay consistent, stay motivated, and enjoy your home workouts!
            </p>
         </div>
            
        </div>
        <Footer/>
      
    </div>
  )
}

export default Workout
